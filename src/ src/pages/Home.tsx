function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 text-purple-400">
        مرحباً بكم في مدينة القدية
      </h2>
      <p className="text-lg mb-8 text-gray-300">
        اكتشف عالماً من الترفيه والمغامرات في قلب المملكة العربية السعودية
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">الألعاب</h3>
          <p className="text-gray-400">ألعاب مثيرة ومغامرات لا تُنسى</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">الفعاليات</h3>
          <p className="text-gray-400">فعاليات وعروض مميزة على مدار السنة</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">التسوق</h3>
          <p className="text-gray-400">تجربة تسوق فريدة ومتاجر متنوعة</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
