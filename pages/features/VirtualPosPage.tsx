// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix VirtualPosPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { 
  CreditCard, 
  Shield, 
  Key, 
  CheckCircle, 
  AlertTriangle, 
  Settings, 
  Globe, 
  Lock,
  Smartphone,
  Wallet,
  ArrowRight,
  Phone,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";

const posProviders = [
  {
    id: "iyzipay",
    name: "İyziPay",
    logo: "💳",
    commission: "2.9%",
    features: ["3D Secure", "Taksit", "Mobil Ödeme", "Sanal Kart"],
    description: "Türkiye'nin en güvenilir ödeme çözümü"
  },
  {
    id: "paytr",
    name: "PayTR",
    logo: "🏦",
    commission: "2.7%",
    features: ["Instant Payment", "QR Kod", "Havale/EFT", "Kripto Para"],
    description: "Hızlı entegrasyon ve düşük komisyon"
  },
  {
    id: "paratika",
    name: "Paratika",
    logo: "💰",
    commission: "3.1%",
    features: ["Yurt Dışı Kartlar", "Multi-Currency", "Risk Yönetimi"],
    description: "Uluslararası ödeme desteği"
  },
  {
    id: "paynet",
    name: "PayNet",
    logo: "🔐",
    commission: "2.8%",
    features: ["BKM Express", "Garanti Pay", "Akbank Direkt", "Denizbank"],
    description: "Banka entegrasyonları"
  }
];

const paymentMethods = [
  { id: "creditcard", name: "Kredi Kartı", icon: CreditCard, enabled: true },
  { id: "debitcard", name: "Banka Kartı", icon: CreditCard, enabled: true },
  { id: "mobile", name: "Mobil Ödeme", icon: Smartphone, enabled: false },
  { id: "wallet", name: "Dijital Cüzdan", icon: Wallet, enabled: false }
];

export function VirtualPosPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();
  const [selectedProvider, setSelectedProvider] = useState("iyzipay");
  const [testMode, setTestMode] = useState(true);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [apiKeys, setApiKeys] = useState({
    apiKey: "",
    secretKey: "",
    merchantId: ""
  });

  const handleApiKeyChange = (field: string, value: string) => {
    setApiKeys(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
                <CreditCard className="w-4 h-4" />
                <span className="font-medium">Sanal POS Yönetimi</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Güvenli
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Ödeme Altyapısı</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sanal POS entegrasyonu ile web sitenizden güvenli ödeme alımı yapın. 
                Farklı ödeme sağlayıcıları arasından seçim yapın ve kolayca API anahtarlarınızı yönetin.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="setup" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="setup" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Kurulum</span>
              </TabsTrigger>
              <TabsTrigger value="providers" className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Sağlayıcılar</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Güvenlik</span>
              </TabsTrigger>
              <TabsTrigger value="testing" className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Test</span>
              </TabsTrigger>
            </TabsList>

            {/* Setup Tab */}
            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Key className="w-5 h-5" />
                    <span>API Anahtarları</span>
                  </CardTitle>
                  <CardDescription>
                    Seçtiğiniz ödeme sağlayıcısının API anahtarlarını girin
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Provider Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="provider">Ödeme Sağlayıcısı</Label>
                    <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sağlayıcı seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {posProviders.map((provider) => (
                          <SelectItem key={provider.id} value={provider.id}>
                            <div className="flex items-center space-x-2">
                              <span>{provider.logo}</span>
                              <span>{provider.name}</span>
                              <Badge variant="secondary">{provider.commission}</Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Test Mode Toggle */}
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <Label>Test Modu</Label>
                      <p className="text-sm text-gray-600">
                        Test modunda gerçek ödeme alınmaz, sadece test işlemleri yapılır
                      </p>
                    </div>
                    <Switch 
                      checked={testMode} 
                      onCheckedChange={setTestMode}
                    />
                  </div>

                  {/* API Keys */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="apiKey">API Anahtarı</Label>
                      <div className="relative">
                        <Input
                          id="apiKey"
                          type={showApiKey ? "text" : "password"}
                          value={apiKeys.apiKey}
                          onChange={(e) => handleApiKeyChange("apiKey", e.target.value)}
                          placeholder="API anahtarınızı girin"
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-8 w-8 p-0"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="secretKey">Gizli Anahtar</Label>
                      <div className="relative">
                        <Input
                          id="secretKey"
                          type={showSecretKey ? "text" : "password"}
                          value={apiKeys.secretKey}
                          onChange={(e) => handleApiKeyChange("secretKey", e.target.value)}
                          placeholder="Gizli anahtarınızı girin"
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-8 w-8 p-0"
                          onClick={() => setShowSecretKey(!showSecretKey)}
                        >
                          {showSecretKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="merchantId">Merchant ID</Label>
                      <Input
                        id="merchantId"
                        value={apiKeys.merchantId}
                        onChange={(e) => handleApiKeyChange("merchantId", e.target.value)}
                        placeholder="Merchant ID'nizi girin"
                      />
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">
                      Bağlantıyı Test Et
                    </Button>
                    <Button onClick={openForm}>
                      <Lock className="w-4 h-4 mr-2" />
                      Güvenli Kaydet
                    </Button>
                  </div>

                  <Alert>
                    <Shield className="w-4 h-4" />
                    <AlertDescription>
                      API anahtarlarınız 256-bit SSL şifreleme ile güvenli şekilde saklanır. 
                      Hiçbir personelimiz bu bilgilere erişemez.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Ödeme Yöntemleri</CardTitle>
                  <CardDescription>
                    Müşterilerinizin kullanabileceği ödeme yöntemlerini seçin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <method.icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">{method.name}</span>
                        </div>
                        <Switch defaultChecked={method.enabled} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Providers Tab */}
            <TabsContent value="providers" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {posProviders.map((provider) => (
                  <MotionDiv
                    key={provider.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className={`cursor-pointer transition-all ${
                      selectedProvider === provider.id 
                        ? 'border-blue-500 ring-2 ring-blue-500/20' 
                        : 'hover:border-gray-300'
                    }`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{provider.logo}</span>
                            <div>
                              <CardTitle className="text-lg">{provider.name}</CardTitle>
                              <CardDescription>{provider.description}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {provider.commission}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h4 className="font-semibold">Desteklenen Özellikler:</h4>
                          <div className="flex flex-wrap gap-2">
                            {provider.features.map((feature, index) => (
                              <Badge key={index} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button 
                          className="w-full mt-4"
                          variant={selectedProvider === provider.id ? "default" : "outline"}
                          onClick={() => setSelectedProvider(provider.id)}
                        >
                          {selectedProvider === provider.id ? "Seçildi" : "Bu Sağlayıcıyı Seç"}
                        </Button>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Güvenlik Özellikleri</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>3D Secure</Label>
                        <p className="text-sm text-gray-600">Ek güvenlik katmanı</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Fraud Protection</Label>
                        <p className="text-sm text-gray-600">Şüpheli işlem tespiti</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>IP Kısıtlaması</Label>
                        <p className="text-sm text-gray-600">Belirli IP'lerden erişim</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Webhook Doğrulama</Label>
                        <p className="text-sm text-gray-600">Gelen verileri doğrula</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Güvenlik Sertifikaları</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">PCI DSS Uyumlu</p>
                        <p className="text-sm text-gray-600">Kart veri güvenliği standardı</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">SSL/TLS Şifreleme</p>
                        <p className="text-sm text-gray-600">End-to-end şifreleme</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">GDPR Uyumlu</p>
                        <p className="text-sm text-gray-600">Veri koruma tüzüğü</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Testing Tab */}
            <TabsContent value="testing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Test Kartları</CardTitle>
                  <CardDescription>
                    Entegrasyonunuzu test etmek için bu kart numaralarını kullanın
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Başarılı İşlem Kartları</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="font-mono">4508 0345 0803 4509</p>
                          <p className="text-sm text-gray-600">Visa - Başarılı işlem</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="font-mono">5451 0300 0000 0007</p>
                          <p className="text-sm text-gray-600">MasterCard - Başarılı işlem</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Hata Test Kartları</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <p className="font-mono">4508 0345 0803 4517</p>
                          <p className="text-sm text-gray-600">Yetersiz bakiye</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <p className="font-mono">4508 0345 0803 4525</p>
                          <p className="text-sm text-gray-600">Kart blokeli</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="mt-6">
                    <AlertTriangle className="w-4 h-4" />
                    <AlertDescription>
                      Test kartları sadece test modunda çalışır. Canlı modda gerçek kart bilgileri kullanılmalıdır.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Test İşlemleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Test Ödemesi Başlat
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Webhook Test Et
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      İade İşlemi Test Et
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Güvenli Ödeme Altyapınızı Kuralım
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sanal POS entegrasyonu kurulumu için teknik destek alın. 
              Güvenli ödeme altyapınız 24 saat içinde hazır.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Kurulum Desteği Al</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3"
              >
                Entegrasyon Dökümanları
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">PCI DSS Uyumlu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span className="text-sm">256-bit SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">7/24 Destek</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}