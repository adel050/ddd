import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, ShoppingCart, Star, Zap, Shield, Crown } from "lucide-react";

const Store = () => {
  const storeRules = [
    "1- شراء أي عنصر من متجر السيرفر للتأكد من المتطلبات داخل السيرفر",
    "2- في حال شراء أي عنصر من المتجر وتم طردك من السيرفر بسبب مخالفة أو انتهاك طلب استدعاء للتوصل للموافقة على الشروط والأحكام",
    "3- في حال تم تجديد العضويات أو أي شيء من المتجر يجب الموافقة على الشروط والأحكام للسيرفر",
    "4- في حال تم رصد استخدام تغييرات في المتجر في إدارة السيرفر بحيث ممتلكاتك تحت التحقيق ويجب عليك الانتظار أكثر من 10 دقائق قبل الشراء من المتجر",
    "5- في حال شراء أي عنصر ولم يصلك داخل السيرفر يجب عليك فتح تذكرة وإرفاق ما اشتريته من المتجر وسيتم التواصل معك من قبل مسؤولين المتجر",
    "6- في حال الشراء من المتجر لتجديد السلطة أو طلب استبدالها بسلعة أخرى"
  ];

  const vehicles = [
    {
      id: 1,
      name: "سيارة رياضية",
      price: "50,000 درهم",
      category: "سيارات فاخرة",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop",
      features: ["سرعة عالية", "تصميم أنيق", "محرك قوي"]
    },
    {
      id: 2,
      name: "دراجة نارية",
      price: "25,000 درهم",
      category: "دراجات",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      features: ["رشاقة في الحركة", "استهلاك وقود قليل", "سهولة في القيادة"]
    },
    {
      id: 3,
      name: "شاحنة",
      price: "75,000 درهم",
      category: "مركبات ثقيلة",
      image: "https://images.unsplash.com/photo-1594736797933-d0d3a2fd0c1e?w=300&h=200&fit=crop",
      features: ["حمولة كبيرة", "قوة تحمل عالية", "مناسبة للأعمال"]
    },
    {
      id: 4,
      name: "سيارة شرطة",
      price: "100,000 درهم",
      category: "مركبات خاصة",
      image: "https://images.unsplash.com/photo-1544980919-e17526d4ed0a?w=300&h=200&fit=crop",
      features: ["معدات شرطة", "سرعة عالية", "حماية إضافية"]
    }
  ];

  const accessories = [
    { name: "أسلحة متقدمة", price: "10,000 - 50,000 درهم", icon: Shield },
    { name: "معدات طبية", price: "500 - 5,000 درهم", icon: Star },
    { name: "أدوات خاصة", price: "1,000 - 15,000 درهم", icon: Zap },
    { name: "ملابس حصرية", price: "200 - 2,000 درهم", icon: Crown }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-white">قوانين وشروط وأحكام</h1>
          <h2 className="text-3xl font-bold mb-8 text-white">متجر السيرفر</h2>
        </div>

        {/* Hero Section with Car */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="bg-[var(--qiddiya-secondary)] border-gray-700">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop" 
                  alt="سيارة السيرفر"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-[var(--qiddiya-accent)] ml-3" />
                  <h3 className="text-2xl font-bold text-white">سيارة مميزة</h3>
                </div>
                <p className="text-[var(--qiddiya-text)] text-center mb-6">
                  احصل على أفضل السيارات في السيرفر بأسعار مناسبة
                </p>
                <Button className="w-full bg-[var(--qiddiya-accent)] text-white hover:bg-blue-600 transition-colors hover-scale">
                  <ShoppingCart className="h-5 w-5 ml-2" />
                  تسوق الآن
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">قوانين المتجر</h3>
                <div className="space-y-4">
                  {storeRules.map((rule, index) => (
                    <div key={index} className="border-r-4 border-[var(--qiddiya-accent)] pr-4">
                      <p className="text-sm text-[var(--qiddiya-text)] leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600 rounded-lg">
                  <p className="text-yellow-400 font-semibold text-center text-sm">
                    مخالفة شركات من المتجر يعني موافقتك على الشروط والأحكام
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vehicles Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">المركبات المتاحة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="bg-[var(--qiddiya-secondary)] border-gray-700 hover-scale">
                <CardContent className="p-6">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2">
                      {vehicle.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-white mb-2">{vehicle.name}</h3>
                    <p className="text-green-400 font-semibold mb-3">{vehicle.price}</p>
                    <div className="space-y-1 mb-4">
                      {vehicle.features.map((feature, index) => (
                        <p key={index} className="text-xs text-[var(--qiddiya-text-muted)]">• {feature}</p>
                      ))}
                    </div>
                    <Button className="w-full bg-[var(--qiddiya-accent)] text-white hover:bg-blue-600">
                      <ShoppingCart className="h-4 w-4 ml-2" />
                      شراء الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accessories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">الإكسسوارات والمعدات</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((accessory, index) => (
              <Card key={index} className="bg-[var(--qiddiya-secondary)] border-gray-700 hover-scale">
                <CardContent className="p-6 text-center">
                  <accessory.icon className="h-12 w-12 text-[var(--qiddiya-accent)] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{accessory.name}</h3>
                  <p className="text-green-400 font-semibold mb-4">{accessory.price}</p>
                  <Button className="w-full bg-[var(--qiddiya-accent)] text-white hover:bg-blue-600">
                    <ShoppingCart className="h-4 w-4 ml-2" />
                    شراء الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Purchase Instructions */}
        <Card className="bg-[var(--qiddiya-dark)] border-gray-700">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">كيفية الشراء</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--qiddiya-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-white mb-2">اختر المنتج</h4>
                <p className="text-[var(--qiddiya-text-muted)]">تصفح المتجر واختر ما يناسبك</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--qiddiya-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-white mb-2">أكمل الدفع</h4>
                <p className="text-[var(--qiddiya-text-muted)]">استخدم إحدى طرق الدفع المتاحة</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--qiddiya-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-white mb-2">استلم مشترياتك</h4>
                <p className="text-[var(--qiddiya-text-muted)]">احصل على مشترياتك داخل السيرفر</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Store;
