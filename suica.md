# Наръчник за SUICA
## Съдържание
- [Наръчник за SUICA](#наръчник-за-suica)
  - [Съдържание](#съдържание)
  - [Общи свойства](#общи-свойства)
      - [color](#color)
      - [visible](#visible)
      - [mode](#mode)
      - [spin](#spin)
      - [focus](#focus)
      - [center](#center)
  - [2D фигури](#2d-фигури)
    - [point: `point([x, y, z]);`](#point-pointx-y-z)
    - [line: `line([x1,y1,z1], [x2, y2, z2])`](#line-linex1y1z1-x2-y2-z2)
    - [ray: `ray([x1,y1,z1], [x2, y2, z2])`](#ray-rayx1y1z1-x2-y2-z2)
    - [ray: `segment([x1,y1,z1], [x2, y2, z2])`](#ray-segmentx1y1z1-x2-y2-z2)
    - [square: `square([x,y,z], size)`](#square-squarexyz-size)
    - [rectangle: `square([x,y,z], [a,b])`](#rectangle-squarexyz-ab)
    - [polygon: `polygon([x, y, z], radius, #sides)`](#polygon-polygonx-y-z-radius-sides)
    - [circle: `circle([x, y, z], radius)`](#circle-circlex-y-z-radius)
    - [ellipse: `ellipse([x, y, z], [r1, r2])`](#ellipse-ellipsex-y-z-r1-r2)
  - [3D фигури](#3d-фигури)
    - [cube: `cube([x,y,z], size)`](#cube-cubexyz-size)
    - [cuboid: `cuboid([x,y,z], [a, b, c])`](#cuboid-cuboidxyz-a-b-c)
    - [sphere: `sphere([x, y, z], radius)`](#sphere-spherex-y-z-radius)
    - [spheroid `spheroid([x, y, z], [r1, r2, r3])`](#spheroid-spheroidx-y-z-r1-r2-r3)
    - [prism `prism([x, y, z], radius, height, #sides)`](#prism-prismx-y-z-radius-height-sides)
    - [pyramid `pyramid([x, y, z], radius, height, #sides)`](#pyramid-pyramidx-y-z-radius-height-sides)
    - [cylinder `cylinder([x, y, z], radius, height)`](#cylinder-cylinderx-y-z-radius-height)
    - [cone `cone([x, y, z], radius, height)`](#cone-conex-y-z-radius-height)
    - [cylindroid `cylidroid([x, y, z], [r1, r2], height)`](#cylindroid-cylidroidx-y-z-r1-r2-height)
    - [conoid `conoid([x, y, z], [r1, r2], height)`](#conoid-conoidx-y-z-r1-r2-height)
  - [Tips \& Tricks](#tips--tricks)
    - [Canvas background](#canvas-background)
    - [Дължина на координатините оси](#дължина-на-координатините-оси)
    - [Оглеждане](#оглеждане)
    - [Определяне на средни стойности](#определяне-на-средни-стойности)
    - [Вградени функции за вектори](#вградени-функции-за-вектори)
    - [Събиране на вектори](#събиране-на-вектори)
    - [origin](#origin)
    - [Завъртане на куб около околен ръб](#завъртане-на-куб-около-околен-ръб)
    - [Създаване на обекти](#създаване-на-обекти)
    - [Промяна на характеристики чрез функция](#промяна-на-характеристики-чрез-функция)
    - [Промяна на характеристики чрез custom](#промяна-на-характеристики-чрез-custom)
    - [Копиране на обекти](#копиране-на-обекти)
    - [Групиране на обекти/ Групи](#групиране-на-обекти-групи)
    - [Отсичане на части/ Пресичащи равнини](#отсичане-на-части-пресичащи-равнини)
    - [Радиално разположени тънки призми с основи, насочени навън](#радиално-разположени-тънки-призми-с-основи-насочени-навън)
  - [Анимации](#анимации)
    - [Основа](#основа)
  - [Праволинейно движение](#праволинейно-движение)
    - [чрез вектор на скоростта](#чрез-вектор-на-скоростта)
    - [чрез точка на целта](#чрез-точка-на-целта)
    - [От точка до точка](#от-точка-до-точка)
  - [Кръгово движение](#кръгово-движение)
    - [Нормално въртене](#нормално-въртене)
    - [Вложено въртене](#вложено-въртене)
    - [Движение по дъга](#движение-по-дъга)
    - [Движение по сфера](#движение-по-сфера)
    - [Движение по куб](#движение-по-куб)
  - [Интерактивност](#интерактивност)
    - [Добавяне на слушател за събития](#добавяне-на-слушател-за-събития)
    - [Събитие `event`](#събитие-event)
    - [Координати на мишката в `canvas`](#координати-на-мишката-в-canvas)
    - [Координати на обекти в `canvas`](#координати-на-обекти-в-canvas)
  - [Гледна точка](#гледна-точка)
  - [Следене на мишката](#следене-на-мишката)
    - [Твърда връзка](#твърда-връзка)
    - [Мека връзка](#мека-връзка)
    - [Верига от меки връзки](#верига-от-меки-връзки)
    - [Посочване на обект с мишката](#посочване-на-обект-с-мишката)
  - [Свободно влачене](#свободно-влачене)
    - [Наивно влачене на обект](#наивно-влачене-на-обект)
    - [Прецизно влачене на обект](#прецизно-влачене-на-обект)
    - [Влачене на сцената](#влачене-на-сцената)
      - [2D](#2d)
      - [3D](#3d)
  - [Влачене с ограничения](#влачене-с-ограничения)
    - [Влачене с линейна комбинация](#влачене-с-линейна-комбинация)
    - [Най-близката точка](#най-близката-точка)
    - [Влачене по окръжност](#влачене-по-окръжност)

## Общи свойства
#### color
```javascript
figure.color = [0-1, 0-1, 0-1];
```
#### visible
```javascript
figure.visible = true; // default
figure.visible = false;
```
#### mode
```javascript
figure.mode = Suica.POINT;
figure.mode = Suica.LINE;
figure.mode = Suica.SOLID;
```
#### spin
```javascript
figure.spin = radians(deg);
```
#### focus
```javascript
figure.focus = [[-1, 1], [-1, 1], [-1, 1]];
```
#### center
```javascript
figure.center = [newX, newY, newZ];
```
## 2D фигури
### point: `point([x, y, z]);`
- `center` ➝ `[x, y, z]`
- `pointSize`
### line: `line([x1,y1,z1], [x2, y2, z2])`
- `from` ➝ `[x1, y1,z1]`
- `to`➝ `[x1, y1, z1]`
### ray: `ray([x1,y1,z1], [x2, y2, z2])`
- `from` ➝ `[x1, y1,z1]`
- `to`➝ `[x1, y1, z1]`
### ray: `segment([x1,y1,z1], [x2, y2, z2])`
- `from` ➝ `[x1, y1,z1]`
- `to`➝ `[x1, y1, z1]`
### square: `square([x,y,z], size)`
- `origin`➝ `за изместване`
- `size` ➝ `size`
### rectangle: `square([x,y,z], [a,b])`
- `origin`➝ `за изместване`
- `sizes` ➝ `[a, b]`
### polygon: `polygon([x, y, z], radius, #sides)`
- `origin` ➝ `за изместване`
- `radius`
- `light`
- `count` ➝ `#sides`
### circle: `circle([x, y, z], radius)`
- `origin` ➝ `за изместване`
- `radius`
### ellipse: `ellipse([x, y, z], [r1, r2])`
- `origin` ➝ `за изместване`
- `radii`➝ `[r1, r2]`
## 3D фигури
### cube: `cube([x,y,z], size)`
- `origin`➝ `за изместване`
- `size` ➝ `size`
- `light`
### cuboid: `cuboid([x,y,z], [a, b, c])`
- `origin`➝ `за изместване`
- `sizes` ➝ `[a, b, c]`
- `light`
### sphere: `sphere([x, y, z], radius)`
- `radius`
- `light`
### spheroid `spheroid([x, y, z], [r1, r2, r3])`
- `radii` ➝ `[r1. r2, r3]`
- `light`
### prism `prism([x, y, z], radius, height, #sides)`
- `radius`
- `height`
- `count`
- `hollow`
- `light`
### pyramid `pyramid([x, y, z], radius, height, #sides)`
- `radius`
- `height`
- `count`
- `hollow`
- `light`
### cylinder `cylinder([x, y, z], radius, height)`
- `radius`
- `height`
- `hollow`
- `light`
### cone `cone([x, y, z], radius, height)`
- `radius`
- `height`
- `hollow`
- `light`
### cylindroid `cylidroid([x, y, z], [r1, r2], height)`
- `radii`
- `height`
- `hollow`
- `light`
### conoid `conoid([x, y, z], [r1, r2], height)`
- `radii`
- `height`
- `hollow`
- `light`
## Tips & Tricks
### Canvas background
```javascript
function main(){
    new Suica();
    background([0-1; 0-1, 0-1]);
}
```
### Дължина на координатините оси
```javascript
oxyz(length = 100);
```
### Оглеждане
```javascript
demo(horizontalDistance = 100, height = 0.3, speed = 1, targetHeight = 0.1)
```
### Определяне на средни стойности
```javascript
k*I + (1-k)II
```
### Вградени функции за вектори
- `vectorPoints()` - разлика на вeктори
- `unitVector()` - единичен вектор
- `scalarProduct()` - скаларно произведение (= 0 при перпендикулярни вектори)
- `vectorProduct()` - векторно произведение (дава вектор, перперндикулярен на дадените два)
### Събиране на вектори
```javascript
function vAdd(a,b){
    var x = a[0]+b[0];
    var y = a[1]+b[1];
    var z = a[2]+b[2];
    return [x,y,z];
}
```
### origin
- спрямо локалната координатна система
- мерната единица е дължината на квадрата
- задава новия център, който може да се различава от геометричния
- така, когато местим квадрат, можем да боравим с център, който е негов връх (по-лесно отколкото да се смята $\frac{a}{2}$)
### Завъртане на куб около околен ръб
```javascript
a = cube([0,-6,0],5);
a.origin = [0.5,0.5,0];
a.spin = 2*Math.PI/3;
```
### Създаване на обекти
- `o = object()`
- `o = new Suica.Object()`
### Промяна на характеристики чрез функция
```javascript
function makeRed(object){
    object.color = [1, 0, 0];
    return object;
}
```
### Промяна на характеристики чрез custom
```javascript
object().custom({prop:val, prop:val, ...});
```
```javascript
style = {prop:val, prop:val, ...};
object().custom(style);
```
### Копиране на обекти
```javascript
copy = sameAs(original);
```
### Групиране на обекти/ Групи
```javascript
g = group([obj1, obj2, ...]);
g.add(objN);
g.mergeColor();
g.color = [0-1, 0-1, 0-1];
```
### Отсичане на части/ Пресичащи равнини
```javascript
object().custom({clipPlanes:[[a, b, c, d]]}); // coordinates are local for the object
```
### Радиално разположени тънки призми с основи, насочени навън
```javascript
spheroid([0,0,0],[5,5,3.5]);
for (var i=0; i<16; i++){
    a = radians(360*i/16);
    b = prism([Math.cos(a),Math.sin(a),0],0.75,4.3, Math.round(random(3,8)));
    b.color = [1,1,0];
    b.focus = b.center;
    b.spin = Math.PI;
}
``` 
## Анимации
### Основа
```javascript
function main() {
    p = new Suica();
    p.nextFrame = animate;
}
function animate() {
    t = Suica.time;     // time since start of program
    s = Suica.dTime;    // time since last frame
    ...
}
```
## Праволинейно движение
### чрез вектор на скоростта
- в реално време - скоростта е единица разстояние/секунда (не зависи от скоростта на компютъра)  
    $P_{t+\Delta t}=P_t+v.\Delta t$
    ```javascript
    a.center[0] += 5*Suica.dTime;
    ```
- в нереално време - единица разстояние/кадър (зависи от скоростта на компютъра)

    $P_{f+1}=P_f+v$
### чрез точка на целта
- чрез уравнение на траекторията
### От точка до точка
Разглеждаме отсечката като вектор $\vec{V}$ 
- чрез вектор на скоростта: определяме броя стъпки $n$

    $\vec{v}=\frac{1}{n}\vec{V}$
- чрез отчитане на времето: определяме времето за обхождане $T$
- чрез линейна комбинация - забавяне на движението в крайщата

    $\vec{v}=\frac{\Delta t}{T}\vec{V}$
```javascript
function main() {
    t = 20;
    A = point(...)
    B = point(...)
    v = vectorPoints(B.center, A.center);
}
// по време
function move() {
    if (Suica.time<=t){
        c.center[0] += v[0]*Suica.dTime/t;
        c.center[1] += v[1]*Suica.dTime/t;
        c.center[2] += v[2]*Suica.dTime/t;
    }
}
// линейна комбинация
function move() {
    k = 0.5+0.5*Math.sin(Suica.time);
    c.center[0] += v[0]*Suica.dTime/t;
    c.center[1] += v[1]*Suica.dTime/t;
    c.center[2] += v[2]*Suica.dTime/t;
}
```
## Кръгово движение
### Нормално въртене 
Нека центърът на движението е точката $(x_0, y_0, z_0)$. Обект се движи в кръг около тази точка с радиус $R$ по следният начин:

$x=x_0+R\cos{(t)}\\
y=y_0+R\sin{(t)}\\
z=z_0$

### Вложено въртене
Обект се движи в кръг с радиус $R_1$, а друг обект се движи около първия в кръг с радиус $R_2$ 

$x_1=x_0+R_1\cos{(t)}\\
y1_=y_0+R_1\sin{(t)}$

$x_2 = x_1+R_2\cos(4t) \\
y_2 = y_1+R_2\sin(4t)$

```javascript
planet.center[0] = x0 + 30*Math.cos(t);
planet.center[1] = y0 + 40*Math.sin(t);

moon1.center[0] = planet.center[0]+10*Math.cos(4*t); // 4x скорост
moon1.center[1] = planet.center[1]+10*Math.sin(4*t);

moon2.center[0] = planet.center[0]+15*Math.cos(3*t); // 3x скорост
moon2.center[1] = planet.center[1]+15*Math.sin(3*t);
```
### Движение по дъга
Ъгълът се мени в някакъв интервал. Чрез използване на синус е възможно връщането обратно и повторението на движението. 
```javascript
ang = radians(60+55*Math.sin(t)); // [5,115]
a.center[0] = R*Math.cos(ang);
a.center[1] = R*Math.sin(ang);
```
### Движение по сфера
$x=x_0+R.\cos(\alpha).\cos(\beta)\\
y=y_0+R.\cos(\alpha).\sin(\beta)\\
z=z_0+R.\sin(\alpha)$
### Движение по куб
Движението по куб е движение по сфера, мащабирано с $d$ - най-голямата по стойност координата на обекта върхъ сферата
```javascript
p = [cos(alpha)*cos(beta),cos(alpha)*sin(beta),sin(alpha)];
d = max(abs(p[0]),abs(p[1]),abs(p[2]));
a[i].center[0] = 20*p[0]/d;
a[i].center[1] = 20*p[1]/d;
a[i].center[2] = 20*p[2]/d;
```
## Интерактивност
### Добавяне на слушател за събития
```javascript
p = new Suica();
p.gl.canvas.addEventListener('eventName', eventFunction, false);
```
### Събитие `event`
- `target` - DOM елементът, където е настъпило събитието
- `clientX`, `clientY` - координати спрямо прозореца на браузъра
- `screenX`, `screenY` - координати спрямо екрана
- `buttons` - натиснати бутони
- `altKey`, `ctrlKey`, `shiftKey` - дали са натиснати ALT, CTRL, SHIFT
- `preventDefault()` - забранява дейността по подразбиране (удобно за скриване на контекстно меню при десен клик с мишката)
### Координати на мишката в `canvas`
```javascript
mouseX = clientX - offsetLeft
mouseY = clientY - offsetTop
```
### Координати на обекти в `canvas`
```javascript
var x = event.clientX
        - event.target.offsetLeft
        - event.target.offsetWidth/2;
var y = -(event.clientY
          - event.target.offsetTop
          - event.target.offsetHeight/2);
```
## Гледна точка
- `lookAt(position, target, up)` - задава изгледа чрез точката, от която гледаме, точката към която гледаме и ориентацията на изображението (нагоре/надолу)
- поглед към центъра на координатната система, "нагоре" е същата посока като векторът $z$. Векторът за посока не трябва да изглежда като $\vec{0}$. 
```javascript
lookAt([0,0,100], [0,0,0], [0,0,1])
```
## Следене на мишката
### Твърда връзка
Обектът е "закачен" за мишката и се движи точно по нея. 
```javascript
function mouseMove(event) {
 var x =   event.clientX - event.target.offsetLeft - event.target.offsetWidth/2;
 var y = -(event.clientY - event.target.offsetTop - event.target.offsetHeight/2);
 s.center = [x,y,0];
}
```
### Мека връзка
Обектът е закачен към мишката, но се движи почти като нея. 
```javascript
var x=0, y=0;
function mouseMove(event) {
    var x =   event.clientX - event.target.offsetLeft - event.target.offsetWidth/2;
    var y = -(event.clientY - event.target.offsetTop - event.target.offsetHeight/2);
}
// main(){p.nextFrame = animate;}
function animate() {
    var k = 0.92;
    s.center[0] = s.center[0]*k+(1-k)*x;
    s.center[1] = s.center[1]*k+(1-k)*y;
}
```
### Верига от меки връзки
```javascript
function mouseMove(event) {
    // твърда връзка за първия обект във веригата, за да са меки следващите връзки по нея
    s[0].center[0] = event.clientX-event.target.offsetLeft-event.target.offsetWidth/2;
    s[0].center[1] = -(event.clientY-event.target.offsetTop-event.target.offsetHeight/2);
}
function animate() {
    var k = 0.85;
    // понеже s[0] е вече настроена твърда връзка, можем да настроим s[1], ...
    for (var i=1; i<n; i++) {
        s[i].center[0] = s[i].center[0]*k+(1-k)*s[i-1].center[0];
        s[i].center[1] = s[i].center[1]*k+(1-k)*s[i-1].center[1];
    }
}
```
### Посочване на обект с мишката
- чрез изчисляване на зоната на обекта - само за прости обекти
- чрез метода `Suica().objectAtPoint()` - връща обекта на платното, ако има такъв. Ако няма (или не може да бъде еднозначно определен), връща `null`. Един обект може да бъде засечен само ако притежава свойството `interactive = true`. 
## Свободно влачене
### Наивно влачене на обект
Независимо къде захванем обекта, в края на влаченето, центърът му ще е последната позиция на мишката
```javascript
function mouseDown(event) {
    // само захващаме обекта
    obj = p.objectAtPoint(oldX,oldX);
}
function mouseMove(event) {
    newX = event.clientX;
    newY = event.clientY;
    // директно присвояваме координатите на мишката без изместване
    if (obj) obj.center = [newX,newY,0];
}
```
### Прецизно влачене на обект
Ако захванем обекта настрани от центъра му, в края на влаченето пак ще има същото отместване между мишката и центъра на обекта
```javascript
function mouseDown(event) {
    // запомняме старите координати на мишката за изместването
    oldX = event.clientX;
    oldY = event.clientY;
    obj = p.objectAtPoint(oldX,oldX);
}
function mouseMove(event) {
    newX = event.clientX;;
    newY = event.clientY;
    // изместваме обект с колкото мишката е била изместена 
    // от центъра му в началото на влаченето
    obj.center[0] += newX - oldX; 
    obj.center[1] -= newY - oldY;
    oldX = newX;
    oldY = newY;
}
```
### Влачене на сцената
#### 2D
```javascript
lookX = 0; // новата X позиция на гледане
lookY = 0; // новата Y позиция на гледане
lookS = 1; // мащаб (може да има опцията да се мени с десния бутон на мишката)
function mouseDown(event) {
    oldX = event.clientX;
    oldY = event.clientY;
}
function mouseMove(event) {
    // изместваме гледната точка с колкото се е изместила мишката от началото на натискането
    lookX -= lookS*(event.clientX-oldX);
    lookY += lookS*(event.clientY-oldY);

    // задаваме координатите на гледната точка
    lookAt ([lookX,lookY,lookS*650], [lookX,lookY,0], [0,1,0]);
    oldX = event.clientX;
    oldY = event.clientY;
}
```
#### 3D
```javascript
lookA = 0; // изместването по X като ъгъл
lookB = 0; // изместването по Y като ъгъл
lookD = 200; // радиусът на въображаемата сфера, която въртим

function mouseDown(event) {
    oldX = event.clientX;
    oldY = event.clientY;
}
function mouseMove(event) {
    newX = event.clientX;
    newY = event.clientY;
    // изместваме гледната точка с толкова, 
    // с колкото сме изместили мишката
    lookA -= (newX-oldX)/200;
    lookB += (newY-oldY)/200;
    // забраняват се ъгли, при които 
    // посоката ще изглежда като нулевия вектор 
    // и изображението ще се изгуби
    if (lookB > +1.5) 
        lookB = +1.5;
    if (lookB < -1.5) 
        lookB = -1.5;
    lookAt ([
        lookD*Math.cos(lookA)*Math.cos(lookB),
        lookD*Math.sin(lookA)*Math.cos(lookB),
        lookD*Math.sin(lookB)], [0,0,0], [0,0,1]);
    oldX = newX;
    oldY = newY;
}
```
## Влачене с ограничения
### Влачене с линейна комбинация
``` javascript
var obj = null;
var k = 0.5;
function mouseDown(event) {
    oldX = event.clientX;
    obj = p.objectAtPoint(x,event.clientY);
}
function mouseUp(event) {
    obj = null;
}
function mouseMove(event) {
    newX = event.clientX;
    if (obj) {
        k -= (newX - oldX)/500;
        // включи тези ограничения, ако движението е затворено в отсечка
        // (k < 0)? k = 0:k;
        // (k > 1)? k = 1:k;
        // добави тези ограничения за k, 
        // ако не искаш топчето слайдер да закрива крайщата на отсечката
        kLimit = (s.radius+5)/Math.sqrt(
            (p1[0]-p2[0])*(p1[0]-p2[0]) + 
            (p1[1]-p2[1])*(p1[1]-p2[1]));
...
if (k<kLimit) k=kLimit;
if (k>1-kLimit) k=1-kLimit;

        s.center[0] = p1[0]*k+(1-k)*p2[0];
        s.center[1] = p1[1]*k+(1-k)*p2[1];
    }
    oldX = newX;
}
```
### Най-близката точка
Нека точките $A$ и $B$ образуват права. Извън правата се намира произволна точка $C$. Търси се най-близката на $C$ точка ($D$), която лежи върху правата $AB$. 

За целта създаваме вектора $\vec{AB}$. Тогава $D=A+k.\vec{AB}$, където $k=\frac{(X_C-X_A)(X_B-X_A)+(Y_C-X_A)(Y_B-Y_A)}{(X_B-X_A)^2+(Y_B-Y_A)^2}$
```javascript
A = point([...]);
B = point([...]);
C = point([...]);
AB = vectorPoints(B,A);
k = (
        (C.center[0]-A[0])*AB[0]+
        (C.center[1]-A[1])*AB[1]
    )
    /
    (AB[0]*AB[0]+AB[1]*AB[1]);
    // включи тези ограничения, ако движението е затворено в отсечка
    // (k < 0)? k = 0:k;
    // (k > 1)? k = 1:k;
D.center[0] = A[0]+k*AB[0];
D.center[1] = A[1]+k*AB[1];
```
### Влачене по окръжност
- чрез ъгъл
```javascript
function mouseMove(event) {
    if (obj) {
        newX = event.clientX
        obj.alpha -= (newX - oldX)/100;
        obj.center = [
            120*Math.cos(obj.alpha),
            120*Math.sin(obj.alpha),
            0];
    }
    oldX = newX;
}
```
- чрез най-близка точка (при ортографска проекция)

    Позицията на мишката се мащабира до радиуса и се превръща в позицията на премествания обект.
```javascript
function mouseMove(event) { 
    if (obj) {
        var x =   event.clientX - event.target.offsetLeft - event.target.offsetWidth/2;
        var y = -(event.clientY - event.target.offsetTop - event.target.offsetHeight/2);
        var d = Math.sqrt(x*x+y*y); 
        obj.center[0] = 120*x/d;
        obj.center[1] = 120*y/d;
    }
}
```

