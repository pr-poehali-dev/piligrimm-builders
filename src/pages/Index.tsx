import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('main');

  const projects = [
    {
      id: 1,
      title: 'ул. Красноярова 1',
      status: 'completed',
      type: 'Многоквартирный жилой дом',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'ул. Кирова 32',
      status: 'completed',
      type: 'Многоквартирный жилой дом',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Таун-хаусы Покровский тракт 17 км',
      status: 'completed',
      type: 'Таун-хаусы',
      image: '/placeholder.svg'
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="HardHat" className="text-accent" size={32} />
              <h1 className="text-2xl font-bold text-primary">Пилигримм</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('main')} className="text-foreground hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors">О компании</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-accent transition-colors">Объекты</button>
              <button onClick={() => scrollToSection('clients')} className="text-foreground hover:text-accent transition-colors">Для клиентов</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent transition-colors">Контакты</button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+79849849849" className="hidden md:flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">8 984 984 98 49</span>
              </a>
              <Button variant="outline" size="sm">
                <Icon name="Eye" size={16} className="mr-2" />
                Версия для слабовидящих
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="main" className="py-24 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Строительная компания<br />
                <span className="text-accent">Пилигримм</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Одна из динамично развивающихся строительных компаний Республики Саха (Якутия) 
                с высоким уровнем производства и современной технологией в сфере гражданского 
                многоквартирного строительства.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('projects')}>
                  <Icon name="Building2" size={20} className="mr-2" />
                  Наши объекты
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-primary mb-8 text-center">О компании</h3>
              
              <Card className="p-8 mb-8 animate-fade-in">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Calendar" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Основана в 2005 году</h4>
                    <p className="text-muted-foreground">
                      Компания была организована 13 августа 2005 года. За это время были построены 
                      многоквартирные жилые дома по ул. Красноярова 1, ул.Кирова 32, Таун-хаусы 
                      по Покровскому тракту 17 км.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="text-accent" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Опыт</h4>
                  <p className="text-muted-foreground text-sm">Большой опыт в возведении многоэтажных жилых домов</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Ruler" className="text-accent" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Проекты</h4>
                  <p className="text-muted-foreground text-sm">Типовые и индивидуальные проекты любой сложности</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="text-accent" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Сроки</h4>
                  <p className="text-muted-foreground text-sm">Выполнение работ точно в установленный срок</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-4xl font-bold text-primary mb-4 text-center">Объекты</h3>
              <p className="text-center text-muted-foreground mb-12">
                Построенные и реализованные проекты нашей компании
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Icon name="Building2" className="text-muted-foreground" size={64} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          Сдан
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm">{project.type}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Смотреть все объекты
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-bold text-primary mb-8">Для клиентов</h3>
              
              <Card className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Строительная компания «Пилигримм» имеет большой опыт в возведении многоэтажных 
                  жилых домов и готова выполнить строительство, как по типовым, так и по индивидуальным 
                  проектам, выполнив весь комплекс строительно-монтажных работ точно в срок.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-primary mb-12 text-center">Контакты</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Телефон</h4>
                      <a href="tel:+79849849849" className="text-lg text-accent hover:underline">
                        8 984 984 98 49
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Адрес</h4>
                      <p className="text-muted-foreground">ул. Кирова 32, 301 офис</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Clock" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт с 09:00 до 18:00</p>
                      <p className="text-muted-foreground text-sm">Обед с 13:00 до 14:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-primary text-primary-foreground">
                  <h4 className="text-2xl font-bold mb-4">Свяжитесь с нами</h4>
                  <p className="mb-6 opacity-90">
                    Готовы обсудить ваш проект? Наши специалисты ответят на все ваши вопросы.
                  </p>
                  <Button size="lg" variant="secondary" className="w-full">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="HardHat" size={28} />
                  <h5 className="text-xl font-bold">Пилигримм</h5>
                </div>
                <p className="text-sm opacity-80">
                  Строительная компания полного цикла
                </p>
              </div>

              <div>
                <h6 className="font-semibold mb-3">Навигация</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><button onClick={() => scrollToSection('main')} className="hover:opacity-100 transition-opacity">Главная</button></li>
                  <li><button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition-opacity">О компании</button></li>
                  <li><button onClick={() => scrollToSection('projects')} className="hover:opacity-100 transition-opacity">Объекты</button></li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-3">Услуги</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Многоквартирное строительство</li>
                  <li>Индивидуальные проекты</li>
                  <li>Таун-хаусы</li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-3">Контакты</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>8 984 984 98 49</li>
                  <li>ул. Кирова 32, офис 301</li>
                  <li>Пн-Пт 09:00-18:00</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
              <p>© 2005-2024 Строительная компания «Пилигримм». Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}