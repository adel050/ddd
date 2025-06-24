import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users,
  Send,
  AlertCircle,
  CheckCircle,
  User,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "ديسكورد",
      description: "تواصل معنا على ديسكورد للحصول على رد سريع",
      value: "#support-channel",
      color: "text-[#5865F2]",
      action: "انضم للديسكورد"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      description: "راسلنا للاستفسارات الرسمية والمهمة",
      value: "support@server.com",
      color: "text-blue-400",
      action: "أرسل إيميل"
    },
    {
      icon: Phone,
      title: "واتساب",
      description: "تواصل مباشر عبر الواتساب",
      value: "+966 50 123 4567",
      color: "text-green-400",
      action: "أرسل رسالة"
    }
  ];

  const supportHours = [
    { day: "الأحد - الخميس", hours: "9:00 صباحاً - 12:00 منتصف الليل" },
    { day: "الجمعة - السبت", hours: "12:00 ظهراً - 12:00 منتصف الليل" },
    { day: "أوقات الطوارئ", hours: "متاح 24/7 للحالات العاجلة" }
  ];

  const faqItems = [
    {
      question: "كيف يمكنني الانضمام للسيرفر؟",
      answer: "يمكنك الانضمام عبر رابط الديسكورد الخاص بنا، ثم اتباع تعليمات التسجيل."
    },
    {
      question: "ما هي أوقات الدعم الفني؟",
      answer: "فريق الدعم متاح من الساعة 9 صباحاً حتى منتصف الليل، مع دعم طوارئ 24/7."
    },
    {
      question: "كيف يمكنني الشراء من المتجر؟",
      answer: "تفضل بزيارة صفحة المتجر واختيار المنتج المطلوب، ثم اتبع خطوات الدفع."
    },
    {
      question: "ماذا أفعل إذا واجهت مشكلة تقنية؟",
      answer: "تواصل معنا فوراً عبر الديسكورد أو افتح تذكرة دعم وسنساعدك في الحل."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-white">تواصل معنا</h1>
          <p className="text-xl text-[var(--qiddiya-text-muted)] max-w-3xl mx-auto">
            نحن هنا لمساعدتك في أي وقت. تواصل معنا عبر إحدى الطرق التالية وسنرد عليك في أقرب وقت ممكن
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-[var(--qiddiya-secondary)] border-gray-700 hover-scale">
              <CardContent className="p-8 text-center">
                <method.icon className={`h-16 w-16 ${method.color} mx-auto mb-6`} />
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-[var(--qiddiya-text-muted)] mb-4">{method.description}</p>
                <div className="bg-[var(--qiddiya-dark)] p-3 rounded-lg mb-6">
                  <p className="text-white font-mono">{method.value}</p>
                </div>
                <Button className={`w-full bg-gray-600 text-white hover:bg-gray-700 transition-colors`}>
                  {method.action}
                  <Send className="h-4 w-4 mr-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-[var(--qiddiya-secondary)] border-gray-700">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-8 w-8 text-[var(--qiddiya-accent)] ml-3" />
                <h3 className="text-2xl font-bold text-white">أرسل رسالة</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">الاسم الكامل</Label>
                  <Input 
                    id="name"
                    placeholder="أدخل اسمك الكامل"
                    className="mt-2 bg-[var(--qiddiya-dark)] border-gray-600 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2 bg-[var(--qiddiya-dark)] border-gray-600 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white">الموضوع</Label>
                  <Input 
                    id="subject"
                    placeholder="موضوع الرسالة"
                    className="mt-2 bg-[var(--qiddiya-dark)] border-gray-600 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">الرسالة</Label>
                  <Textarea 
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="mt-2 bg-[var(--qiddiya-dark)] border-gray-600 text-white resize-none"
                  />
                </div>
                
                <Button className="w-full bg-[var(--qiddiya-accent)] text-white hover:bg-blue-600 transition-colors hover-scale">
                  <Send className="h-5 w-5 ml-2" />
                  إرسال الرسالة
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Info */}
          <div className="space-y-8">
            {/* Support Hours */}
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-green-400 ml-3" />
                  <h3 className="text-2xl font-bold text-white">أوقات الدعم</h3>
                </div>
                <div className="space-y-4">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[var(--qiddiya-secondary)] rounded-lg">
                      <span className="text-white font-semibold">{schedule.day}</span>
                      <span className="text-[var(--qiddiya-text-muted)]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-[var(--qiddiya-accent)] ml-3" />
                  <h3 className="text-2xl font-bold text-white">إحصائيات سريعة</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[var(--qiddiya-secondary)] rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">< 5 دقائق</div>
                    <div className="text-sm text-[var(--qiddiya-text-muted)]">متوسط وقت الرد</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--qiddiya-secondary)] rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">98%</div>
                    <div className="text-sm text-[var(--qiddiya-text-muted)]">رضا العملاء</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--qiddiya-secondary)] rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                    <div className="text-sm text-[var(--qiddiya-text-muted)]">دعم طوارئ</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--qiddiya-secondary)] rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                    <div className="text-sm text-[var(--qiddiya-text-muted)]">مشكلة حُلت</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-[var(--qiddiya-dark)] border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-red-400 ml-3" />
                  <h2 className="text-2xl font-bold text-white">موقعنا</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-[var(--qiddiya-text)] mb-4">
                      السيرفر، المملكة العربية السعودية
                    </p>
                    <p className="text-[var(--qiddiya-text-muted)]">
                      نحن متواجدون لخدمتكم على مدار الساعة في سيرفرنا المميز
                    </p>
                  </div>
                  <div className="bg-[var(--qiddiya-secondary)] p-6 rounded-lg">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-red-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">متواجدون أونلاين</p>
                      <p className="text-[var(--qiddiya-text-muted)] text-sm">خدمة سحابية عالمية</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="bg-[var(--qiddiya-secondary)] border-gray-700">
          <CardContent className="p-8">
            <div className="flex items-center mb-8">
              <AlertCircle className="h-8 w-8 text-yellow-400 ml-3" />
              <h3 className="text-2xl font-bold text-white">الأسئلة الشائعة</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-[var(--qiddiya-dark)] p-6 rounded-lg">
                  <div className="flex items-start mb-3">
                    <CheckCircle className="h-5 w-5 text-green-400 ml-2 mt-1 flex-shrink-0" />
                    <h4 className="text-white font-semibold">{item.question}</h4>
                  </div>
                  <p className="text-[var(--qiddiya-text-muted)] text-sm leading-relaxed pr-7">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
