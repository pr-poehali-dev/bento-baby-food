import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-accent">БэбиКаша</h1>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
              <a href="#products" className="text-foreground hover:text-accent transition-colors">Продукция</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
              <a href="#faq" className="text-foreground hover:text-accent transition-colors">FAQ</a>
              <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Здоровое питание<br />
                <span className="text-accent">для малышей</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Натуральные каши и злаковые продукты, разработанные с заботой о здоровье вашего ребёнка
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                Выбрать продукт
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/b1588e52-d439-4801-a2e5-ec67d3cf4fa9/files/e0edf3b5-75d0-4801-870c-b448ab016bb2.jpg" 
                alt="Малыш ест кашу"
                className="rounded-3xl shadow-2xl animate-scale-in"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-none rounded-3xl hover:scale-105 transition-transform">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Leaf" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% натурально</h3>
              <p className="text-muted-foreground">Только органические ингредиенты без консервантов</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/20 to-secondary/5 border-none rounded-3xl hover:scale-105 transition-transform">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">Сертифицированное производство с контролем качества</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-muted to-muted/50 border-none rounded-3xl hover:scale-105 transition-transform">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Heart" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">С любовью</h3>
              <p className="text-muted-foreground">Разработано педиатрами и нутрициологами</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наша продукция</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-48 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <Icon name="Baby" size={64} className="text-accent" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-3">4-6 месяцев</span>
                <h3 className="text-2xl font-semibold mb-2">Первые каши</h3>
                <p className="text-muted-foreground mb-4">Нежные гипоаллергенные каши для начала прикорма</p>
                <Button variant="outline" className="rounded-full w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-48 bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                <Icon name="Sunrise" size={64} className="text-accent" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-3">6-9 месяцев</span>
                <h3 className="text-2xl font-semibold mb-2">Молочные каши</h3>
                <p className="text-muted-foreground mb-4">Питательные каши с добавлением молока</p>
                <Button variant="outline" className="rounded-full w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <Icon name="Sparkles" size={64} className="text-accent" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium mb-3">9-12 месяцев</span>
                <h3 className="text-2xl font-semibold mb-2">Мультизлаковые</h3>
                <p className="text-muted-foreground mb-4">Разнообразие злаков и фруктовых добавок</p>
                <Button variant="outline" className="rounded-full w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Cookie" size={64} className="text-accent" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/50 rounded-full text-sm font-medium mb-3">12+ месяцев</span>
                <h3 className="text-2xl font-semibold mb-2">Печенье и снеки</h3>
                <p className="text-muted-foreground mb-4">Полезные перекусы для активных малышей</p>
                <Button variant="outline" className="rounded-full w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <Icon name="Apple" size={64} className="text-accent" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium mb-3">6+ месяцев</span>
                <h3 className="text-2xl font-semibold mb-2">С фруктами</h3>
                <p className="text-muted-foreground mb-4">Каши с натуральными фруктовыми добавками</p>
                <Button variant="outline" className="rounded-full w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-48 bg-gradient-to-br from-muted/60 to-muted/20 flex items-center justify-center">
                <Icon name="Wheat" size={64} className="text-accent" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-muted/80 rounded-full text-sm font-medium mb-3">8+ месяцев</span>
                <h3 className="text-2xl font-semibold mb-2">Цельнозерновые</h3>
                <p className="text-muted-foreground mb-4">Максимум пользы из цельного зерна</p>
                <Button variant="outline" className="rounded-full w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/b1588e52-d439-4801-a2e5-ec67d3cf4fa9/files/a17db6ee-d0bd-4613-8331-72c4fe32825c.jpg"
                alt="Натуральные ингредиенты" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании БэбиКаша</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы занимаемся производством детского питания более 15 лет. Наша миссия — обеспечить каждого малыша качественным, безопасным и полезным питанием.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-2xl">
                    <Icon name="CheckCircle" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Собственные поля</h3>
                    <p className="text-muted-foreground">Выращиваем органические злаки без пестицидов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-2xl">
                    <Icon name="CheckCircle" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Современное производство</h3>
                    <p className="text-muted-foreground">Европейское оборудование и технологии</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-2xl">
                    <Icon name="CheckCircle" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Контроль качества</h3>
                    <p className="text-muted-foreground">Многоступенчатая проверка на каждом этапе</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Вопросы и ответы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                С какого возраста можно вводить каши?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Педиатры рекомендуют начинать прикорм кашами с 4-6 месяцев. Начинайте с безмолочных гипоаллергенных каш из одного злака.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Как правильно хранить каши?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Храните каши в сухом прохладном месте при температуре не выше 25°С. После вскрытия упаковки используйте продукт в течение 3 недель.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Есть ли в составе сахар?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Наши каши не содержат добавленного сахара. Сладость достигается за счёт натуральных фруктовых добавок и естественной сладости злаков.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Какие каши подходят для детей с аллергией?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для детей с аллергией мы рекомендуем безмолочные каши из гречки, риса или кукурузы. Эти злаки гипоаллергенны и не содержат глютен.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Где можно купить вашу продукцию?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Наши каши продаются в крупных супермаркетах, детских магазинах и аптеках по всей России. Также доступна доставка через интернет-магазины.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 rounded-3xl border-none bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-xl">
                      <Icon name="Phone" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-semibold">8 (800) 555-35-35</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-xl">
                      <Icon name="Mail" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">info@bebikasha.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-xl">
                      <Icon name="MapPin" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="font-semibold">г. Москва, ул. Здоровья, д. 15</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className="p-8 rounded-3xl border-none shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="rounded-xl border-muted"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email" 
                      className="rounded-xl border-muted"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      className="rounded-xl border-muted min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl">
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">БэбиКаша</h3>
              <p className="text-white/80">Здоровое питание для счастливого детства</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-white/80">
                <li>Первые каши</li>
                <li>Молочные каши</li>
                <li>Мультизлаковые</li>
                <li>Снеки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Производство</li>
                <li>Сертификаты</li>
                <li>Партнёрам</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/80">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Доставка</li>
                <li>Гарантии</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 БэбиКаша. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
