import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { boilers } from '@/data/boilers';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/04ccc47e-80f6-4915-9c51-95101b87503e.jpg" 
                alt="Bigger Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  Bigger
                </h1>
                <p className="text-sm text-gray-600">Энергетические решения</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Товары</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-bigger-blue to-bigger-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Бойлеры нового поколения
                <span className="text-primary block">Bigger</span>
              </h1>
              <p className="text-xl text-blue-100">
                Надежность, энергоэффективность и инновационные технологии в каждом продукте
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Каталог товаров
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-bigger-blue px-8 py-4 text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-blue-100">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-blue-100">довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">3</div>
                    <div className="text-sm text-blue-100">года гарантии</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-blue-100">поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bigger-blue mb-4">Наши бойлеры</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите идеальное решение для вашего дома из линейки высококачественных бойлеров Bigger
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boilers.map((boiler) => (
              <Card key={boiler.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={boiler.image} 
                      alt={boiler.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-bigger-blue group-hover:text-primary transition-colors">
                    {boiler.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {boiler.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {boiler.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-primary">{boiler.price}</div>
                    <Link to={`/boiler/${boiler.id}`}>
                      <Button className="bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-bigger-blue mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600 mb-8">
                Получите профессиональную консультацию и индивидуальное предложение
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-bigger-blue">Телефон</div>
                    <div className="text-gray-600">+7 (800) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-bigger-blue">Email</div>
                    <div className="text-gray-600">info@bigger-boilers.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-bigger-blue">Адрес</div>
                    <div className="text-gray-600">г. Москва, ул. Промышленная, 15</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-bigger-blue">Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-gray-200 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-gray-200 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-gray-200 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-gray-200 focus:border-primary min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-3">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bigger-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/img/04ccc47e-80f6-4915-9c51-95101b87503e.jpg" 
                  alt="Bigger Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold">Bigger</span>
              </div>
              <p className="text-blue-100">
                Инновационные бойлеры для современного дома. Качество, надежность и эффективность.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-blue-100">
                <li>Бойлеры для дома</li>
                <li>Промышленные решения</li>
                <li>Запчасти и аксессуары</li>
                <li>Сервисное обслуживание</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-blue-100">
                <li>+7 (800) 123-45-67</li>
                <li>info@bigger-boilers.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2024 Bigger. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;