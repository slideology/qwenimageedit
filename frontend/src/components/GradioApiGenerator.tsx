import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

/**
 * Gradio API Generator Component
 * Call Gradio application on Hugging Face via API
 */
const GradioApiGenerator: React.FC = () => {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Hugging Face API端点
  const API_URL = 'https://api-inference.huggingface.co/models/LLMhacker/strangerzonehf-Flux-Ghibli-Art-LoRA-forgbai';
  
  // Handle submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      setError('Please enter a description');
      return;
    }
    
    setIsGenerating(true);
    setError(null);
    
    try {
      // Method 1: Directly use Hugging Face Inference API
      const response = await axios.post(
        API_URL,
        { inputs: prompt },
        { 
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'application/json',
            // If you need an API key, uncomment the line below and add your key
            // 'Authorization': 'Bearer YOUR_HUGGING_FACE_API_KEY'
          }
        }
      );
      
      // Convert binary data to base64
      const base64 = btoa(
        new Uint8Array(response.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      
      setGeneratedImage(`data:image/jpeg;base64,${base64}`);
    } catch (err) {
      console.error('Error generating image:', err);
      setError('Error generating image. Please try again later.');
      
      // Try backup API method
      try {
        // Method 2: Use Gradio API (requires backend support)
        const backendResponse = await axios.post('/api/generate-image', { prompt });
        if (backendResponse.data && backendResponse.data.url) {
          setGeneratedImage(backendResponse.data.url);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (backendErr) {
        console.error('Backup API also failed:', backendErr);
        setError('All generation methods failed. Please check your network connection or try again later.');
      }
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Download the generated image
  const handleDownload = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `ghibli-style-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2">{t('generatorPage.gradioTitle', 'Ghibli Style AI Generator')}</h2>
        <p className="text-gray-600">
          {t('generatorPage.gradioDescription', 'Transform your ideas into beautiful Ghibli-style artwork using our AI model.')}
        </p>
      </div>
      
      {/* Usage Tips */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">{t('generatorPage.usageTips', 'Usage Tips')}</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc pl-5 space-y-1">
              <li>Enter a detailed scene description, e.g. "A mountain cabin in Miyazaki style with forest and stream"</li>
<li>The more detailed your description, the better the image quality</li>
<li>Generation process may take 30 seconds to 2 minutes, please be patient</li>
<li>If generation fails, try simplifying your description or try again later</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                {t('generatorPage.textPromptLabel', 'Describe your image')}
              </label>
              <textarea
                id="prompt"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('generatorPage.textPromptPlaceholder', 'A peaceful countryside with a small cottage, Totoro style...')}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isGenerating}
              />
              <p className="mt-1 text-xs text-gray-500">
                {t('generatorPage.textPromptTip', 'Tip: The more detailed your description, the better the result. Include scene, characters, time, weather, etc.')}
              </p>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg text-white font-medium ${
                  isGenerating 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={isGenerating}
              >
                {isGenerating 
                  ? <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('generatorPage.generating', 'Generating...')}
                    </span>
                  : t('generatorPage.generateButton', 'Generate Ghibli-Style Image')
                }
              </button>
            </div>
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                <p className="text-sm">{error}</p>
              </div>
            )}
          </form>
        </div>
        
        {/* Result Display */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {t('generatorPage.result', 'Generated Result')}
          </h3>
          
          <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
            {generatedImage ? (
              <img 
                src={generatedImage} 
                alt={t('generatorPage.generatedImageAlt', 'Generated Ghibli-style image')} 
                className="object-contain w-full h-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">
                  {t('generatorPage.resultPlaceholder', 'Your Ghibli-style image will appear here')}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {t('generatorPage.resultInstructions', 'Please enter a description on the left and click the generate button')}
                </p>
              </div>
            )}
          </div>
          
          {generatedImage && (
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                {t('generatorPage.downloadButton', 'Download')}
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>{t('generatorPage.gradioDisclaimer', 'This generator is powered by Hugging Face and Gradio. Results may vary based on your inputs.')}</p>
      </div>
    </div>
  );
};

export default GradioApiGenerator;
