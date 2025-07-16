import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { boilers } from '@/data/boilers';

export default function BoilerDetail() {
  const { id } = useParams();
  const boiler = boilers.find(b => b.id === Number(id));

  if (!boiler) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Товар не найден</h1>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  Bigger
                </h1>
                <p className="text-sm text-gray-600">Энергетические решения</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад к каталогу
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={boiler.image} 
                alt={boiler.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{boiler.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{boiler.description}</p>
              <div className="text-4xl font-bold text-orange-600 mb-8">{boiler.price}</div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {boiler.features.map((feature, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать консультацию
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать техпаспорт
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Specifications */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Icon name="Settings" size={24} className="mr-2" />
                Технические характеристики
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(boiler.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600 capitalize">
                    {key === 'volume' && 'Объем'}
                    {key === 'power' && 'Мощность'}
                    {key === 'efficiency' && 'Эффективность'}
                    {key === 'dimensions' && 'Размеры'}
                    {key === 'weight' && 'Вес'}
                    {key === 'warranty' && 'Гарантия'}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <Icon name="CheckCircle" size={24} className="mr-2" />
                Преимущества
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {boiler.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Installation */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-600">
                <Icon name="Wrench" size={24} className="mr-2" />
                Установка и обслуживание
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {boiler.installation.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="Tool" size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы заказать {boiler.name}?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Получите персональную консультацию и расчет стоимости установки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Mail" size={20} className="mr-2" />
              info@bigger.ru
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}