import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1e] to-[#1a1f2c]">
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/2a5ed0d1-0416-4385-9346-5bccde59d95a/files/1b2f6370-ff6a-4473-91a3-e9aa5013e19f.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1e]/50 to-[#0a0f1e]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ваш фасад всегда чист<br />и под контролем.<br />Без усилий.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Smart-стекло нового поколения с функцией самоочистки и интеллектуальным управлением — 
              для зданий, которым важно быть на шаг впереди.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-10 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-2xl shadow-[#0EA5E9]/30"
            >
              Получить индивидуальное предложение
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white/50" size={32} />
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1a1f2c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Знакомо ли вам это?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all duration-300 animate-slide-up">
              <div className="mb-6 w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                <Icon name="Droplets" className="text-red-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Дорогая уборка</h3>
              <p className="text-gray-300 leading-relaxed">
                Ваши фасады теряют презентабельность — уборка дорогая и долгая, грязь и разводы портят имидж здания.
              </p>
            </Card>

            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-6 w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Icon name="ThermometerSun" className="text-orange-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Скачки температуры</h3>
              <p className="text-gray-300 leading-relaxed">
                Внутренняя температура и уровень света скачут: летом жарко, зимой темно, деньги утекают через окна.
              </p>
            </Card>

            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Icon name="AlertCircle" className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Сложная интеграция</h3>
              <p className="text-gray-300 leading-relaxed">
                Новые технологичные решения всегда дорого стоят и сложно интегрируются, а подрядчики перекладывают ответственность.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/2a5ed0d1-0416-4385-9346-5bccde59d95a/files/169900d7-a145-4b7d-adbd-46f6f734cb0e.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Решение, в котором больше не нужно выбирать
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Smart-стекло с самоочищающимся покрытием и управлением прозрачностью — 
              это законченный продукт-сервис "под ключ".
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-[#9b87f5]/20 to-transparent border-[#9b87f5]/30 backdrop-blur">
              <Icon name="Sparkles" className="text-[#9b87f5] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">Всегда чисто</h3>
              <p className="text-gray-300">
                Ваши стеклянные поверхности всегда чисты, без ручного труда.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent border-[#0EA5E9]/30 backdrop-blur">
              <Icon name="Lightbulb" className="text-[#0EA5E9] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">Умное управление</h3>
              <p className="text-gray-300">
                Свет и приватность — одним касанием или автоматически по заданным сценариям.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#9b87f5]/20 to-transparent border-[#9b87f5]/30 backdrop-blur">
              <Icon name="Settings" className="text-[#9b87f5] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">Полный сервис</h3>
              <p className="text-gray-300">
                Всё управление в приложении или BMS, круглосуточный мониторинг и поддержка включены.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent border-[#0EA5E9]/30 backdrop-blur">
              <Icon name="Package" className="text-[#0EA5E9] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">Под ключ</h3>
              <p className="text-gray-300">
                Мы поставляем, интегрируем и берём на себя обслуживание.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#1a1f2c] to-[#0a0f1e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Преимущества для вашего бизнеса
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🧼</div>
              <h3 className="text-xl font-bold text-white mb-2">Чистота 24/7</h3>
              <p className="text-gray-300 text-sm">
                Стекло само очищается — вы забываете про мойки, люльки и рекламации.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-bold text-white mb-2">Климат под контролем</h3>
              <p className="text-gray-300 text-sm">
                Автоматическая регулировка света и тепла для лучшего микроклимата.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-2">0 хлопот</h3>
              <p className="text-gray-300 text-sm">
                Сервис и апгрейды — всё включено в подписку, никаких скрытых затрат.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Аналитика для бизнеса</h3>
              <p className="text-gray-300 text-sm">
                Доступ к отчетам об экономии энергии, воды и труда прямо в вашем кабинете.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🇷🇺</div>
              <h3 className="text-xl font-bold text-white mb-2">Локальная гарантия</h3>
              <p className="text-gray-300 text-sm">
                Быстрые поставки и поддержка на русском языке, никаких сложностей с импортом.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Быстрая окупаемость</h3>
              <p className="text-gray-300 text-sm">
                До 80% экономии на обслуживании, окупаемость за 2–3 года.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1a1f2c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Проверенное решение
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#9b87f5]/20 to-transparent border border-[#9b87f5]/30">
              <div className="text-5xl font-bold text-[#9b87f5] mb-2">80%</div>
              <p className="text-white text-lg">экономии расходов на обслуживание</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#0EA5E9]/20 to-transparent border border-[#0EA5E9]/30">
              <div className="text-5xl font-bold text-[#0EA5E9] mb-2">2-3</div>
              <p className="text-white text-lg">года окупаемость инвестиций</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#9b87f5]/20 to-transparent border border-[#9b87f5]/30">
              <div className="text-5xl font-bold text-[#9b87f5] mb-2">24/7</div>
              <p className="text-white text-lg">поддержка и мониторинг</p>
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-white/5 border-white/10 backdrop-blur">
            <div className="flex items-start gap-6">
              <Icon name="Quote" className="text-[#0EA5E9] flex-shrink-0" size={48} />
              <div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                  "Больше всего поразило, что после дождя фасад и правда сияет — а сервис не подвёл ни разу за год. 
                  Перестал думать про графики мойки и рекламации от арендаторов. Хотим перевести все объекты на это решение."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#9b87f5]/30 flex items-center justify-center">
                    <Icon name="User" className="text-[#9b87f5]" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Александр М.</div>
                    <div className="text-gray-400 text-sm">Директор по эксплуатации бизнес-центра</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0f1e] to-[#1a1f2c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/5 border border-white/10 rounded-xl px-6 backdrop-blur">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#0EA5E9] transition-colors">
                Что если покрытие перестанет работать или стекло повредится?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Ваша подписка включает полный сервис: бесплатная диагностика, замена или ремонт покрытия 
                проводится за наш счёт в кратчайшие сроки. Мы гарантируем непрерывную работу системы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/5 border border-white/10 rounded-xl px-6 backdrop-blur">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#0EA5E9] transition-colors">
                Стекло точно интегрируется с моей BMS или «умным зданием»?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Да, мы подключаемся к любым современным системам управления зданиями. Наша команда 
                проведёт полную интеграцию с вашей существующей инфраструктурой без простоев.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/5 border border-white/10 rounded-xl px-6 backdrop-blur">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#0EA5E9] transition-colors">
                Как быстро окупится инвестиция в Smart-стекло?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                В среднем окупаемость составляет 2-3 года за счёт экономии до 80% на обслуживании фасадов, 
                снижении энергозатрат на кондиционирование и повышении привлекательности здания для арендаторов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/5 border border-white/10 rounded-xl px-6 backdrop-blur">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#0EA5E9] transition-colors">
                Подходит ли решение для уже построенных зданий?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Да, мы предлагаем решения как для новых проектов на этапе строительства, так и для 
                модернизации существующих объектов. Наши специалисты проведут оценку и предложат оптимальный вариант.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-24 px-6 bg-[#1a1f2c]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Получите индивидуальное предложение
            </h2>
            <p className="text-xl text-gray-300">
              Оставьте заявку, и мы подготовим расчёт для вашего объекта
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/5 border-white/10 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Имя *
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Компания *
                </label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  placeholder="Название компании"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 min-h-32"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#0a0f1e] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Smart Glass Solutions. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
