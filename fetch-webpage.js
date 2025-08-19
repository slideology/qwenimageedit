#!/usr/bin/env node

const https = require('https');
const http = require('http');
const { URL } = require('url');

async function fetchWebpage(url) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const client = urlObj.protocol === 'https:' ? https : http;
        
        const options = {
            hostname: urlObj.hostname,
            port: urlObj.port,
            path: urlObj.pathname + urlObj.search,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };

        const req = client.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: data
                });
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.setTimeout(10000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });

        req.end();
    });
}

async function main() {
    const url = process.argv[2] || 'https://qwenlm.github.io/blog/qwen3-coder/';
    
    console.log(`🌐 正在获取网页: ${url}`);
    console.log('='.repeat(50));
    
    try {
        const result = await fetchWebpage(url);
        console.log(`✅ 状态码: ${result.statusCode}`);
        console.log(`📄 内容长度: ${result.body.length} 字符`);
        console.log('='.repeat(50));
        console.log(result.body);
    } catch (error) {
        console.error(`❌ 错误: ${error.message}`);
    }
}

if (require.main === module) {
    main();
}

module.exports = { fetchWebpage };