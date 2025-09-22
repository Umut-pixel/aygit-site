import React from 'react';
import { motion } from "framer-motion";

// TypeScript compatibility fix for motion components
const MotionDiv = motion.div as any;
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { navigateTo } from "../router/Router";
import { useContactCallbackForm } from "../components/ContactCallbackForm";
import { 
  Settings,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  Phone,
  Building2,
  Mail,
  BarChart3,
  Users,
  Calculator,
  UserCheck,
  Cloud,
  Share2,
  FileText,
  Briefcase
} from "lucide-react";

const integrationsData = {
  hero: {
    title: "Güçlü Sistem Entegrasyonları",
    subtitle: "Mevcut sistemlerinizi web sitenizle sorunsuz bir şekilde entegre edin",
    description: "CRM sistemlerinden muhasebe yazılımlarına kadar, işletmenizin kullandığı tüm sistemlerle uyumlu çalışan web altyapısı."
  },
  categories: [
    {
      title: "İş Uygulamaları",
      icon: Settings,
      color: "from-blue-500 to-indigo-500",
      description: "İşletmenizin temel iş süreçlerini destekleyen sistem entegrasyonları",
      integrations: [
        {
          name: "CRM Entegrasyonları",
          href: "/integrations/crm-systems",
          description: "Müşteri yönetim sistemleri entegrasyonu",
          icon: Users,
          platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"],
          benefits: ["Lead Yönetimi", "Müşteri Takibi", "Sales Pipeline", "Reporting"]
        },
        {
          name: "ERP Entegrasyonları",
          href: "/integrations/erp-systems",
          description: "Kurumsal kaynak planlaması entegrasyonu",
          icon: Building2,
          platforms: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"],
          benefits: ["Stok Yönetimi", "Sipariş Takibi", "Finansal Raporlama", "İş Akışları"]
        },
        {
          name: "Muhasebe Sistemi",
          href: "/integrations/accounting",
          description: "Muhasebe yazılımları entegrasyonu",
          icon: Calculator,
          platforms: ["QuickBooks", "Xero", "Sage", "Wave"],
          benefits: ["Fatura Yönetimi", "Gelir Takibi", "Vergi Raporları", "Gider Yönetimi"]
        },
        {
          name: "İK Sistemi",
          href: "/integrations/hr-systems",
          description: "İnsan kaynakları sistemi entegrasyonu",
          icon: UserCheck,
          platforms: ["BambooHR", "Workday", "ADP", "Paychex"],
          benefits: ["Personel Yönetimi", "Bordro Entegrasyonu", "İzin Takibi", "Performance"]
        }
      ]
    },
    {
      title: "Dijital Platformlar",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      description: "Popüler dijital platformlar ve cloud servisler ile entegrasyon",
      integrations: [
        {
          name: "Google Workspace",
          href: "/integrations/google-workspace",
          description: "Google iş uygulamaları entegrasyonu",
          icon: Cloud,
          platforms: ["Gmail", "Google Drive", "Calendar", "Meet"],
          benefits: ["Email Sync", "File Sharing", "Calendar Integration", "Video Conferencing"]
        },
        {
          name: "Microsoft 365",
          href: "/integrations/microsoft-365",
          description: "Microsoft iş uygulamaları entegrasyonu",
          icon: Cloud,
          platforms: ["Outlook", "OneDrive", "Teams", "SharePoint"],
          benefits: ["Email Integration", "Document Sync", "Team Collaboration", "File Management"]
        },
        {
          name: "Sosyal Medya API'ları",
          href: "/integrations/social-media-apis",
          description: "Sosyal medya platformları entegrasyonu",
          icon: Share2,
          platforms: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
          benefits: ["Auto Posting", "Social Login", "Content Sync", "Analytics"]
        },
        {
          name: "Analitik Araçları",
          href: "/integrations/analytics-tools",
          description: "Web analitik araçları entegrasyonu",
          icon: BarChart3,
          platforms: ["Google Analytics", "Hotjar", "Mixpanel", "Amplitude"],
          benefits: ["Traffic Analysis", "User Behavior", "Conversion Tracking", "A/B Testing"]
        }
      ]
    },
    {
      title: "İletişim ve İş Akışı",
      icon: Award,
      color: "from-indigo-500 to-blue-600",
      description: "İletişim araçları ve iş akışı yönetim sistemleri",
      integrations: [
        {
          name: "Email Servisleri",
          href: "/integrations/email-services",
          description: "Profesyonel email sistemleri",
          icon: Mail,
          platforms: ["Mailchimp", "SendGrid", "Constant Contact", "Campaign Monitor"],
          benefits: ["Email Campaigns", "Newsletter", "Automation", "Analytics"]
        },
        {
          name: "Dokümantasyon",
          href: "/integrations/documentation",
          description: "Akıllı doküman yönetimi",
          icon: FileText,
          platforms: ["Notion", "Confluence", "GitBook", "Slab"],
          benefits: ["Knowledge Base", "API Docs", "Team Wiki", "Version Control"]
        },
        {
          name: "Proje Yönetimi",
          href: "/integrations/project-management",
          description: "Proje takip ve yönetim araçları",
          icon: Briefcase,
          platforms: ["Asana", "Trello", "Jira", "Monday.com"],
          benefits: ["Task Management", "Project Tracking", "Team Collaboration", "Reporting"]
        }
      ]
    }
  ],
  stats: [
    { label: "Entegrasyon Seçeneği", value: "50+", icon: Settings },
    { label: "Desteklenen Platform", value: "100+", icon: Globe },
    { label: "API Bağlantısı", value: "200+", icon: Award },
    { label: "Müşteri Memnuniyeti", value: "99%", icon: CheckCircle }
  ],
  popularIntegrations: [
    { name: "Google Analytics", logo: "🔍", category: "Analytics" },
    { name: "Salesforce", logo: "⚡", category: "CRM" },
    { name: "Mailchimp", logo: "📧", category: "Email" },
    { name: "Shopify", logo: "🛒", category: "E-commerce" },
    { name: "Slack", logo: "💬", category: "Communication" },
    { name: "Zapier", logo: "🔗", category: "Automation" }
  ]
};

export function IntegrationsPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <MotionDiv
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {integrationsData.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {integrationsData.hero.subtitle}
              </p>
              <p className="text-lg text-gray-500 max-w-4xl mx-auto">
                {integrationsData.hero.description}
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Entegrasyon Talebi</span>
              </Button>
              <Button 
                onClick={() => navigateTo('/solutions/api-integrations')}
                variant="outline" 
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                API Çözümleri
              </Button>
            </MotionDiv>
          </MotionDiv>

          {/* Popular Integrations */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Popüler Entegrasyonlar</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {integrationsData.popularIntegrations.map((integration, index) => (
                <MotionDiv
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-2xl">{integration.logo}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{integration.name}</div>
                    <div className="text-sm text-gray-500">{integration.category}</div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Stats */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {integrationsData.stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {integrationsData.categories.map((category, categoryIndex) => (
            <MotionDiv
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="mb-24 last:mb-0"
            >
              {/* Category Header */}
              <div className="text-center mb-16">
                <MotionDiv
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mb-6 shadow-lg`}
                >
                  <category.icon className="w-10 h-10 text-white" />
                </MotionDiv>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Integrations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.integrations.map((integration, integrationIndex) => (
                  <MotionDiv
                    key={integration.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + integrationIndex * 0.1 + 0.5, 
                      duration: 0.6 
                    }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <div className="flex items-start space-x-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl shadow-md`}>
                            <integration.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                              {integration.name}
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                              {integration.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        {/* Supported Platforms */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Desteklenen Platformlar</h4>
                          <div className="flex flex-wrap gap-2">
                            {integration.platforms.map((platform, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Ana Özellikler</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {integration.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span className="text-xs text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          onClick={() => navigateTo(integration.href)}
                          className={`w-full bg-gradient-to-r ${category.color} hover:shadow-lg text-white border-0 transition-all duration-300 flex items-center justify-center space-x-2`}
                        >
                          <span>Detayları İncele</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Entegrasyon Avantajlarınız
            </h2>
            <p className="text-xl text-gray-300">
              Sistemlerinizi entegre ettiğinizde kazanacağınız faydalar
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Otomatik Senkronizasyon</h3>
              <p className="text-gray-300">Verileriniz tüm sistemlerde otomatik olarak senkronize edilir</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Merkezi Yönetim</h3>
              <p className="text-gray-300">Tüm sistemlerinizi tek noktadan yönetin ve kontrol edin</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Verimlilik Artışı</h3>
              <p className="text-gray-300">Manuel işlemleri azaltarak ekip verimliliğini artırın</p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Özel Entegrasyon İhtiyacınız mı Var?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Mevcut sistemlerinizle uyumlu özel entegrasyon çözümleri geliştiriyoruz. 
              Teknik ekibimizle görüşerek ihtiyaçlarınızı değerlendirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Özel Çözüm Talebi</span>
              </Button>
              <Button 
                onClick={() => navigateTo('/solutions/api-integrations')}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                API Dokümantasyonu
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}