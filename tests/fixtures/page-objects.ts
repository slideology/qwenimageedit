import { Page, Locator, expect } from '@playwright/test';
import { helpers } from './test-data';

/**
 * 首页页面对象
 */
export class HomePage {
  readonly page: Page;
  readonly heroTitle: Locator;
  readonly heroSubtitle: Locator;
  readonly startCreatingButton: Locator;
  readonly viewExamplesButton: Locator;
  readonly featureTags: Locator;
  readonly scrollIndicator: Locator;
  readonly newsletterInput: Locator;
  readonly newsletterSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroTitle = page.locator('h1');
    this.heroSubtitle = page.locator('p').first();
    this.startCreatingButton = page.locator('text=Start Creating Now');
    this.viewExamplesButton = page.locator('text=View Examples');
    this.featureTags = page.locator('.bg-blue-500\/20');
    this.scrollIndicator = page.locator('.animate-bounce');
    this.newsletterInput = page.locator('input[type="email"]');
    this.newsletterSubmitButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async clickStartCreating() {
    await this.startCreatingButton.click();
  }

  async clickViewExamples() {
    await this.viewExamplesButton.click();
  }

  async scrollToSection(sectionId: string) {
    await helpers.scrollToElement(this.page, `#${sectionId}`);
  }

  async verifyHeroSection() {
    await expect(this.heroTitle).toBeVisible();
    await expect(this.heroTitle).toContainText('ZOOM EARTH AI');
    await expect(this.startCreatingButton).toBeVisible();
    await expect(this.viewExamplesButton).toBeVisible();
  }

  async verifyFeatureTags(expectedTags: string[]) {
    for (const tag of expectedTags) {
      await expect(this.page.locator(`text=${tag}`)).toBeVisible();
    }
  }

  async subscribeNewsletter(email: string) {
    await this.newsletterInput.fill(email);
    await this.newsletterSubmitButton.click();
  }

  async getFeatureCards() {
    await this.scrollToSection('features');
    return this.page.locator('#features .grid > div');
  }

  async getShowcaseCards() {
    await this.scrollToSection('showcase');
    return this.page.locator('#showcase .grid > div');
  }

  async getReviewCards() {
    await this.scrollToSection('reviews');
    return this.page.locator('#reviews .grid > div');
  }
}

/**
 * 导航组件页面对象
 */
export class NavigationComponent {
  readonly page: Page;
  readonly header: Locator;
  readonly logo: Locator;
  readonly logoText: Locator;
  readonly navLinks: Locator;
  readonly tryNowButton: Locator;
  readonly mobileMenuButton: Locator;
  readonly mobileNav: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header');
    this.logo = page.locator('img[alt="ZOOM EARTH AI Logo"]');
    this.logoText = page.locator('text=ZOOM EARTH AI').first();
    this.navLinks = page.locator('nav button');
    this.tryNowButton = page.locator('text=Try Now');
    this.mobileMenuButton = page.locator('button').filter({ hasText: /M4 6h16/ });
    this.mobileNav = page.locator('.md\\:hidden .flex-col');
  }

  async clickNavLink(linkText: string) {
    await this.page.locator(`button:has-text("${linkText}")`).click();
    await this.page.waitForTimeout(1000); // 等待滚动动画
  }

  async toggleMobileMenu() {
    await this.mobileMenuButton.click();
  }

  async verifyNavigation() {
    await expect(this.logo).toBeVisible();
    await expect(this.logoText).toBeVisible();
    await expect(this.tryNowButton).toBeVisible();
  }

  async verifyMobileNavigation() {
    await expect(this.mobileMenuButton).toBeVisible();
  }

  async verifyActiveSection(sectionName: string) {
    const activeLink = this.page.locator(`button:has-text("${sectionName}")`).first();
    // 这里可以根据实际的活跃状态样式进行验证
    await expect(activeLink).toBeVisible();
  }

  async verifyHeaderBackground(isScrolled: boolean) {
    if (isScrolled) {
      await expect(this.header).toHaveClass(/bg-gray-900/);
    } else {
      await expect(this.header).toHaveClass(/bg-transparent/);
    }
  }
}

/**
 * FAQ组件页面对象
 */
export class FAQComponent {
  readonly page: Page;
  readonly faqSection: Locator;
  readonly faqTitle: Locator;
  readonly faqItems: Locator;
  readonly structuredDataScript: Locator;

  constructor(page: Page) {
    this.page = page;
    this.faqSection = page.locator('#faq');
    this.faqTitle = page.locator('text=Everything About Zoom Earth AI');
    this.faqItems = page.locator('#faq .bg-gray-800');
    this.structuredDataScript = page.locator('script[type="application/ld+json"]');
  }

  async scrollToFAQ() {
    await helpers.scrollToElement(this.page, '#faq');
  }

  async toggleFAQ(index: number) {
    const faqItem = this.faqItems.nth(index);
    const button = faqItem.locator('button');
    await button.click();
    await this.page.waitForTimeout(300); // 等待动画
  }

  async verifyFAQStructure() {
    await this.scrollToFAQ();
    await expect(this.faqTitle).toBeVisible();
    await expect(this.faqItems).toHaveCount(6);
  }

  async verifyFAQInteraction(index: number) {
    const faqItem = this.faqItems.nth(index);
    const answerContent = faqItem.locator('.animate-fade-in');
    
    // 初始状态应该是收起的
    await expect(answerContent).not.toBeVisible();
    
    // 点击展开
    await this.toggleFAQ(index);
    await expect(answerContent).toBeVisible();
    
    // 再次点击收起
    await this.toggleFAQ(index);
    await expect(answerContent).not.toBeVisible();
  }

  async verifyStructuredData() {
    await expect(this.structuredDataScript).toHaveCount(1);
    
    const schemaContent = await this.structuredDataScript.textContent();
    expect(schemaContent).toContain('"@type": "FAQPage"');
    expect(schemaContent).toContain('"@type": "Question"');
    
    // 验证JSON格式正确
    expect(() => JSON.parse(schemaContent || '')).not.toThrow();
  }
}

/**
 * Footer组件页面对象
 */
export class FooterComponent {
  readonly page: Page;
  readonly footer: Locator;
  readonly quickLinks: Locator;
  readonly supportLinks: Locator;
  readonly socialLinks: Locator;
  readonly copyrightText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footer = page.locator('footer');
    this.quickLinks = page.locator('footer').locator('text=Quick Links').locator('..');
    this.supportLinks = page.locator('footer').locator('text=Support').locator('..');
    this.socialLinks = page.locator('footer a[href*="youtube.com"], footer a[href*="twitter.com"], footer a[href*="tiktok.com"]');
    this.copyrightText = page.locator('footer').locator('text=© 2024');
  }

  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(500);
  }

  async verifyFooterContent() {
    await this.scrollToFooter();
    await expect(this.footer).toBeVisible();
    await expect(this.copyrightText).toBeVisible();
  }

  async verifyQuickLinks(expectedLinks: string[]) {
    for (const link of expectedLinks) {
      await expect(this.footer.locator(`text=${link}`)).toBeVisible();
    }
  }

  async verifySupportLinks(expectedLinks: string[]) {
    for (const link of expectedLinks) {
      await expect(this.footer.locator(`text=${link}`)).toBeVisible();
    }
  }

  async verifySocialLinks() {
    await expect(this.socialLinks).toHaveCount(3);
  }
}

/**
 * 联系页面页面对象
 */
export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageTextarea: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.subjectInput = page.locator('input[name="subject"]');
    this.messageTextarea = page.locator('textarea[name="message"]');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('/contact');
    await this.page.waitForLoadState('networkidle');
  }

  async fillContactForm(data: {
    name: string;
    email: string;
    subject?: string;
    message: string;
  }) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    if (data.subject && this.subjectInput) {
      await this.subjectInput.fill(data.subject);
    }
    await this.messageTextarea.fill(data.message);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifyFormElements() {
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.messageTextarea).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async verifyFormValidation(field: 'name' | 'email' | 'message') {
    let input: Locator;
    switch (field) {
      case 'name':
        input = this.nameInput;
        break;
      case 'email':
        input = this.emailInput;
        break;
      case 'message':
        input = this.messageTextarea;
        break;
    }
    
    const validationMessage = await input.evaluate(
      (element: HTMLInputElement | HTMLTextAreaElement) => element.validationMessage
    );
    expect(validationMessage).toBeTruthy();
  }
}