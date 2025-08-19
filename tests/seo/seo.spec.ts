import { test, expect } from '@playwright/test';
import { HomePage } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('SEO测试', () => {
  test.describe('基础SEO元素', () => {
    test('页面标题测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证页面标题
      const title = await page.title();
      expect(title).toContain(testData.seoData.expectedTitle);
      expect(title.length).toBeGreaterThan(10);
      expect(title.length).toBeLessThan(60); // SEO最佳实践
      
      console.log(`页面标题: ${title}`);
    });
    
    test('Meta描述测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证meta描述
      const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
      expect(metaDescription).toBeTruthy();
      expect(metaDescription!.length).toBeGreaterThan(50);
      expect(metaDescription!.length).toBeLessThan(160); // SEO最佳实践
      expect(metaDescription).toMatch(testData.seoData.expectedDescription);
      
      console.log(`Meta描述: ${metaDescription}`);
    });
    
    test('Meta关键词测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证meta关键词（如果存在）
      const metaKeywords = await page.locator('meta[name="keywords"]').getAttribute('content');
      
      if (metaKeywords) {
        const keywords = metaKeywords.toLowerCase().split(',').map(k => k.trim());
        
        // 验证包含预期关键词
        for (const expectedKeyword of testData.seoData.expectedKeywords) {
          const hasKeyword = keywords.some(keyword => keyword.includes(expectedKeyword));
          expect(hasKeyword).toBeTruthy();
        }
        
        console.log(`Meta关键词: ${metaKeywords}`);
      }
    });
    
    test('Canonical URL测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证canonical链接
      const canonicalUrl = await page.locator('link[rel="canonical"]').getAttribute('href');
      
      if (canonicalUrl) {
        expect(canonicalUrl).toMatch(/^https?:\/\/.+/);
        console.log(`Canonical URL: ${canonicalUrl}`);
      }
    });
  });
  
  test.describe('Open Graph标签', () => {
    test('OG基础标签测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证OG标题
      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
      expect(ogTitle).toBeTruthy();
      expect(ogTitle).toContain(testData.seoData.expectedOgTags.title);
      
      // 验证OG类型
      const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
      expect(ogType).toBe(testData.seoData.expectedOgTags.type);
      
      // 验证OG描述
      const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
      expect(ogDescription).toBeTruthy();
      expect(ogDescription!.length).toBeGreaterThan(50);
      
      // 验证OG图片
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(ogImage).toBeTruthy();
      expect(ogImage).toMatch(testData.seoData.expectedOgTags.image);
      
      // 验证OG URL
      const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
      expect(ogUrl).toBeTruthy();
      expect(ogUrl).toMatch(testData.seoData.expectedOgTags.url);
      
      console.log('Open Graph标签验证通过');
    });
    
    test('Twitter Card标签测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证Twitter Card类型
      const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
      expect(twitterCard).toBeTruthy();
      expect(['summary', 'summary_large_image']).toContain(twitterCard);
      
      // 验证Twitter标题
      const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
      expect(twitterTitle).toBeTruthy();
      
      // 验证Twitter描述
      const twitterDescription = await page.locator('meta[name="twitter:description"]').getAttribute('content');
      expect(twitterDescription).toBeTruthy();
      
      // 验证Twitter图片
      const twitterImage = await page.locator('meta[name="twitter:image"]').getAttribute('content');
      expect(twitterImage).toBeTruthy();
      
      console.log('Twitter Card标签验证通过');
    });
  });
  
  test.describe('结构化数据', () => {
    test('JSON-LD结构化数据测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取所有JSON-LD脚本
      const jsonLdScripts = page.locator('script[type="application/ld+json"]');
      const scriptCount = await jsonLdScripts.count();
      
      expect(scriptCount).toBeGreaterThan(0);
      
      for (let i = 0; i < scriptCount; i++) {
        const scriptContent = await jsonLdScripts.nth(i).textContent();
        expect(scriptContent).toBeTruthy();
        
        // 验证JSON格式正确
        let jsonData;
        expect(() => {
          jsonData = JSON.parse(scriptContent!);
        }).not.toThrow();
        
        // 验证基本结构化数据字段
        expect(jsonData['@context']).toBeTruthy();
        expect(jsonData['@type']).toBeTruthy();
        
        console.log(`结构化数据 ${i + 1}: ${jsonData['@type']}`);
      }
    });
    
    test('FAQ结构化数据测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 滚动到FAQ区域以触发结构化数据生成
      await page.locator('#faq').scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      // 查找FAQ结构化数据
      const faqScript = page.locator('script[type="application/ld+json"]');
      const scripts = await faqScript.all();
      
      let faqFound = false;
      for (const script of scripts) {
        const content = await script.textContent();
        if (content && content.includes('FAQPage')) {
          faqFound = true;
          
          const faqData = JSON.parse(content);
          expect(faqData['@type']).toBe('FAQPage');
          expect(faqData.mainEntity).toBeTruthy();
          expect(Array.isArray(faqData.mainEntity)).toBeTruthy();
          expect(faqData.mainEntity.length).toBeGreaterThan(0);
          
          // 验证FAQ项目结构
          for (const faqItem of faqData.mainEntity) {
            expect(faqItem['@type']).toBe('Question');
            expect(faqItem.name).toBeTruthy();
            expect(faqItem.acceptedAnswer).toBeTruthy();
            expect(faqItem.acceptedAnswer['@type']).toBe('Answer');
            expect(faqItem.acceptedAnswer.text).toBeTruthy();
          }
          
          console.log(`FAQ结构化数据包含 ${faqData.mainEntity.length} 个问题`);
          break;
        }
      }
      
      expect(faqFound).toBeTruthy();
    });
    
    test('Organization结构化数据测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 查找Organization结构化数据
      const scripts = await page.locator('script[type="application/ld+json"]').all();
      
      let orgFound = false;
      for (const script of scripts) {
        const content = await script.textContent();
        if (content && content.includes('Organization')) {
          orgFound = true;
          
          const orgData = JSON.parse(content);
          expect(orgData['@type']).toBe('Organization');
          expect(orgData.name).toBeTruthy();
          expect(orgData.url).toBeTruthy();
          
          console.log(`Organization: ${orgData.name}`);
          break;
        }
      }
      
      // Organization数据是可选的，所以不强制要求
      if (orgFound) {
        console.log('Organization结构化数据验证通过');
      }
    });
  });
  
  test.describe('HTML语义化', () => {
    test('标题层级测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证H1标签（应该只有一个）
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
      
      const h1Text = await page.locator('h1').textContent();
      expect(h1Text).toBeTruthy();
      expect(h1Text!.length).toBeGreaterThan(10);
      
      // 验证标题层级结构
      const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
      const headingLevels: number[] = [];
      
      for (const heading of headings) {
        const tagName = await heading.evaluate(el => el.tagName.toLowerCase());
        const level = parseInt(tagName.charAt(1));
        headingLevels.push(level);
      }
      
      // 验证标题层级递进合理
      if (headingLevels.length > 0) {
        expect(headingLevels[0]).toBe(1); // 第一个应该是H1
      }
      
      console.log(`标题层级: ${headingLevels.join(', ')}`);
    });
    
    test('语义化标签测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证主要语义化标签存在
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      
      // 验证section标签的使用
      const sections = await page.locator('section').count();
      expect(sections).toBeGreaterThan(0);
      
      // 验证nav标签的使用
      const navs = await page.locator('nav').count();
      expect(navs).toBeGreaterThan(0);
      
      console.log(`语义化标签验证通过: ${sections}个section, ${navs}个nav`);
    });
    
    test('图片Alt属性测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取所有图片
      const images = page.locator('img');
      const imageCount = await images.count();
      
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        const src = await img.getAttribute('src');
        
        // 验证alt属性存在且有意义
        expect(alt).toBeTruthy();
        expect(alt!.length).toBeGreaterThan(2);
        
        console.log(`图片 ${i + 1}: ${src} - Alt: ${alt}`);
      }
      
      console.log(`所有 ${imageCount} 张图片都有有效的Alt属性`);
    });
    
    test('链接可访问性测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取所有链接
      const links = page.locator('a');
      const linkCount = await links.count();
      
      for (let i = 0; i < linkCount; i++) {
        const link = links.nth(i);
        const href = await link.getAttribute('href');
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute('aria-label');
        
        // 验证链接有有效的文本或aria-label
        const hasValidText = (text && text.trim().length > 0) || (ariaLabel && ariaLabel.length > 0);
        expect(hasValidText).toBeTruthy();
        
        // 如果是外部链接，验证target和rel属性
        if (href && (href.startsWith('http') || href.startsWith('//'))) {
          const target = await link.getAttribute('target');
          const rel = await link.getAttribute('rel');
          
          if (target === '_blank') {
            expect(rel).toContain('noopener');
          }
        }
      }
      
      console.log(`所有 ${linkCount} 个链接都有有效的可访问性属性`);
    });
  });
  
  test.describe('页面性能SEO', () => {
    test('页面加载速度SEO测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      const startTime = Date.now();
      await homePage.goto();
      
      // 等待首屏内容加载
      await expect(page.locator('h1')).toBeVisible();
      
      const loadTime = Date.now() - startTime;
      
      // 页面加载时间对SEO很重要
      expect(loadTime).toBeLessThan(3000);
      
      console.log(`页面加载时间: ${loadTime}ms (SEO友好)`);
    });
    
    test('移动端友好性测试', async ({ page }) => {
      // 设置移动端视口
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证viewport meta标签
      const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
      expect(viewport).toBeTruthy();
      expect(viewport).toContain('width=device-width');
      expect(viewport).toContain('initial-scale=1');
      
      // 验证移动端内容可见性
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('button, a').first()).toBeVisible();
      
      // 验证文字大小适合移动端
      const h1FontSize = await page.locator('h1').evaluate(el => {
        return window.getComputedStyle(el).fontSize;
      });
      
      const fontSize = parseInt(h1FontSize);
      expect(fontSize).toBeGreaterThan(16); // 移动端最小字体大小
      
      console.log(`移动端友好性验证通过，H1字体大小: ${fontSize}px`);
    });
    
    test('HTTPS和安全性测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证页面使用HTTPS
      const url = page.url();
      expect(url).toMatch(/^https:/);
      
      // 验证没有混合内容警告
      const mixedContentWarnings: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'warning' && msg.text().includes('mixed content')) {
          mixedContentWarnings.push(msg.text());
        }
      });
      
      await page.waitForTimeout(2000);
      expect(mixedContentWarnings.length).toBe(0);
      
      console.log('HTTPS和安全性验证通过');
    });
  });
  
  test.describe('内容SEO', () => {
    test('内容质量测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证页面有足够的文本内容
      const bodyText = await page.locator('body').textContent();
      const wordCount = bodyText!.split(/\s+/).length;
      
      expect(wordCount).toBeGreaterThan(300); // 最少300个词
      
      // 验证关键词密度合理
      const lowerText = bodyText!.toLowerCase();
      const keywordCounts = testData.seoData.expectedKeywords.map(keyword => {
        const regex = new RegExp(keyword, 'gi');
        const matches = lowerText.match(regex);
        return { keyword, count: matches ? matches.length : 0 };
      });
      
      // 每个关键词至少出现一次
      for (const { keyword, count } of keywordCounts) {
        expect(count).toBeGreaterThan(0);
      }
      
      console.log(`内容词数: ${wordCount}`);
      console.log('关键词分布:', keywordCounts);
    });
    
    test('内部链接结构测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取所有内部链接
      const internalLinks = page.locator('a[href^="/"], a[href^="#"]');
      const linkCount = await internalLinks.count();
      
      expect(linkCount).toBeGreaterThan(5); // 至少有5个内部链接
      
      // 验证锚点链接功能
      const anchorLinks = page.locator('a[href^="#"]');
      const anchorCount = await anchorLinks.count();
      
      if (anchorCount > 0) {
        const firstAnchor = anchorLinks.first();
        const href = await firstAnchor.getAttribute('href');
        const targetId = href!.substring(1);
        
        // 验证目标元素存在
        await expect(page.locator(`#${targetId}`)).toBeVisible();
      }
      
      console.log(`内部链接数量: ${linkCount}, 锚点链接: ${anchorCount}`);
    });
  });
});