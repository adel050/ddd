import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageCircle, 
  Trophy, 
  Star,
  ArrowLeft,
  Play,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useDynamicContent } from "@/hooks/useDynamicContent";

const Home = () => {
  const { getText } = useDynamicContent();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--qiddiya-dark)] to-[var(--qiddiya-secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
{getText('home.title', 'مرحباً بكم في السيرفر')}
          </h1>
          
          <Card className="bg-[var(--qiddiya-secondary)] border-gray-700 p-8 mb-8 text-right">
            <CardContent>
              <h2 className="text-2xl font-bold text-white mb-6">مرحباً بك في سيرفرنا المميز</h2>
              <p className="text-lg leading-relaxed text-[var(--qiddiya-text)]">
                سيتم مع تطبيق المالك الجديد الدخول للكمبيوتر مع بروتوكول استعمال فيرفاكس لتحديد أساليب فيرفاكس مع معلومات في مجال الذكاء بيتا مع إستراتيجيات المطلوب لكل شخص تحديد ما هو متاح
              </p>
              <p className="text-lg leading-relaxed text-[var(--qiddiya-text)] mb-6">
                العنصر الأول مع البرنامج للأساسيات في التواصل مع أعضاء السيرفر والتحكم المنطقي والمحافظة على قوانين وأحكام السيرفر.
              </p>
              <div className="text-center">
                <Button 
                  className="bg-[var(--qiddiya-accent)] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors hover-scale"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Play className="h-5 w-5 ml-2" />
                  ابدأ التجربة الآن
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-[var(--qiddiya-secondary)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-[var(--qiddiya-accent)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">مجتمع نشط</h3>
                <p className="text-[var(--qiddiya-text-muted)]">أكثر من 500+ عضو نشط</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--qiddiya-secondary)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">دعم 24/7</h3>
                <p className="text-[var(--qiddiya-text-muted)]">فريق دعم متاح دائماً</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--qiddiya-secondary)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">أحداث مميزة</h3>
                <p className="text-[var(--qiddiya-text-muted)]">فعاليات أسبوعية وجوائز</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--qiddiya-secondary)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">تجربة فريدة</h3>
                <p className="text-[var(--qiddiya-text-muted)]">محتوى حصري ومميز</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[var(--qiddiya-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">لماذا سيرفرنا؟</h2>
          
          {/* Community Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Discord Community */}
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-[var(--qiddiya-secondary)] rounded-full flex items-center justify-center">
                    <MessageCircle className="h-12 w-12 text-[var(--qiddiya-accent)]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">مجتمع ديسكورد</h3>
                <p className="text-[var(--qiddiya-text-muted)] mb-6 leading-relaxed">
                  انضم إلى مجتمعنا النشط على ديسكورد للتواصل مع الأعضاء والحصول على آخر الأخبار والتحديثات
                </p>
                <Button className="bg-[#5865F2] text-white px-6 py-3 rounded-lg hover:bg-[#4752C4] transition-colors hover-scale w-full">
                  <MessageCircle className="h-5 w-5 ml-2" />
                  انضم للديسكورد
                </Button>
              </CardContent>
            </Card>

            {/* Server Rules */}
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-[var(--qiddiya-secondary)] rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">السيرفر</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">قانون السيرفر</h3>
                <p className="text-[var(--qiddiya-text-muted)] mb-6 leading-relaxed">
                  يحكم السيرفر والمحافظة على النظام العام ويضع القوانين المجتمعية للسيرفر
                </p>
                <Button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors hover-scale">
                  قراءة القوانين
                  <ArrowLeft className="h-5 w-5 mr-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--qiddiya-accent)] mb-2">500+</div>
              <p className="text-[var(--qiddiya-text-muted)]">عضو نشط</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-[var(--qiddiya-text-muted)]">دعم متواصل</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <p className="text-[var(--qiddiya-text-muted)]">فعالية شهرياً</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">استقرار عالي</h4>
                <p className="text-sm text-[var(--qiddiya-text-muted)]">سيرفر مستقر 99.9% من الوقت</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-[var(--qiddiya-accent)] mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">إدارة محترفة</h4>
                <p className="text-sm text-[var(--qiddiya-text-muted)]">فريق إدارة ذو خبرة عالية</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <Star className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">محتوى حصري</h4>
                <p className="text-sm text-[var(--qiddiya-text-muted)]">تحديثات ومحتوى جديد باستمرار</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700 hover-scale">
              <CardContent className="p-6 text-center">
                <AlertCircle className="h-10 w-10 text-red-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">أمان عالي</h4>
                <p className="text-sm text-[var(--qiddiya-text-muted)]">حماية قوية ضد المخربين</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--qiddiya-dark)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-white">جاهز للانضمام؟</h2>
          <p className="text-xl text-[var(--qiddiya-text-muted)] mb-8">
            انضم إلى آلاف اللاعبين واستمتع بتجربة لعب لا تُنسى
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[var(--qiddiya-accent)] text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-600 transition-colors hover-scale"
            >
              ابدأ الآن
              <Play className="h-5 w-5 mr-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-[var(--qiddiya-text)] px-8 py-4 text-lg rounded-lg hover:bg-[var(--qiddiya-secondary)] transition-colors"
            >
              تعرف أكثر
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
