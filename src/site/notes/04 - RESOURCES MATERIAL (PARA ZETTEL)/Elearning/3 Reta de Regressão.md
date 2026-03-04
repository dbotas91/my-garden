---
{"tags":["elearning"],"dg-publish":true,"dg-note-icon":"lackluster","noteIcon":"lackluster","permalink":"/04-resources-material-para-zettel/elearning/3-reta-de-regressao/","dgPassFrontmatter":true,"created":"2026-02-03T09:43:48.182+00:00","updated":"2026-02-03T09:43:48.182+00:00"}
---


![](Dashboard/Attachments/icons_notes--sentence%2011.png)

# 3. Reta de Regressão

|   |   |
|---|---|
|![](Dashboard/Attachments/arrow-northeast_gray%201182.svg)Subject|[![](Dashboard/Attachments/icons_graduate%2011.png)3. Regressão Linear Simples](../Subjects/3%20Regress%C3%A3o%20Linear%20Simples%209558cc6271874dbc880a7ea7990d09e0.html)|
|![](Dashboard/Attachments/calendar_gray%201244.svg)Date Created|@June 13, 2022|
|![](Dashboard/Attachments/checkmark-square_gray%20663.svg)To Review?||
|![](Dashboard/Attachments/formula_gray%20482.svg)Review Due||
|![](Dashboard/Attachments/clock_gray%20114.svg)Last Edited|@June 15, 2022 7:36 PM|

# Metodologia

_Determinar a reta de regressão_

- Quando a correlação entre duas variáveis é elevada, se conhecermos o valor de uma das variáveis podemos ter uma ideia do valor que a outra irá tomar. Diz-se que podemos inferir o valor da outra variável.

- Intuitivamente, é a reta que passa através da nuvem de pontos e a divide em dois grupos semelhantes.

- A reta de regressão passa pelo ponto cujas coordenadas são, respetivamente, as médias da primeira e da segunda variáveis, isto é, o centro de gravidade da nuvem de pontos (ponto de coordenadas (x‾,y‾)(\overline x, \overline y)(x,y​)﻿).

## Reta de Regressão

- A reta de regressão é o modelo matemático que resume os valores das amostras da seguinte forma
    
    y^=a+bx\widehat y = a + bxy​=a+bx﻿
    
    - a XXX﻿ chama-se **variável independente**, explicativa ou explanatória;
    
    - a YYY﻿ chama **variável dependentes**, explicada ou resposta.

💡

**Atenção:** As conclusões que se tiram do diagrama de dispersão e do coeficiente de correlação linear não é alterado se trocamos as variáveis XXX﻿ e YYY﻿, isto e, a existência ou não da relação linear não depende de qual variável é considerada independente. No entanto, o modelo matemático será alterado pois depende da variável que é definida como independente.

- aaa﻿ representa a ordenada na origem, isto é, indica o valor de yyy﻿ que se espera observar quando x=0x=0x=0﻿ (o “local” onde a reta corta o eixo dos yyyyyy﻿);

- bbb﻿ representa o declive, isto é, a inclinação da reta. O seu valor indica que a medida yyy﻿ muda em função de xxx﻿, refletindo a correlação existente entre as variáveis:
    
    - Se bbb﻿ for positivo, a relação entre XXX﻿ e YYY﻿ é positiva → **correlação linear positiva**;
    
    - Se bbb﻿ for negativo, a relação entre XXX﻿ e YYY﻿ é negativa → **correlação linear negativa**;

- **Interpretação** de bbb﻿: para cada aumento de uma unidade em xxx﻿, temos um aumento médio de bbb﻿ unidades em yyy﻿.

## Determinar a reta de regressão: y^=a+bx\widehat y = a + bxy​=a+bx﻿

Métodos dos Mínimos Quadrados - É um dos métodos mais conhecidos que permite ajustar uma reta a um conjunto de dados. Consiste em determinar a reta

y^i=a+bxi,   i=1,…,n\widehat y_i = a + bx_i,\ \ \ i = 1,…,ny​i​=a+bxi​,   i=1,…,n﻿

Que minimiza a soma dos quadrados dos desvios ou erros (ei)(e_i)(ei​)﻿ entre os verdadeiros valores observados das ordenadas (yi)(y_i)(yi​)﻿ e os obtidos a partir da reta a ajustar (y^i)(\hat y_i)(y^​i​)﻿:

min{∑i=1nei2}=min{∑i=1n(yi−y^i)2}min \{ \sum_{i=1}^n e_i^2 \} = min \{ \sum_{i=1}^n (y_i - \hat y_i)^2 \}min{∑i=1n​ei2​}=min{∑i=1n​(yi​−y^​i​)2}﻿

[![](Dashboard/Attachments/9A4F71D7-4E31-4370-9FA3-229E8E50D67E.jpeg)](3%20Reta%20de%20Regress%C3%A3o/9A4F71D7-4E31-4370-9FA3-229E8E50D67E.jpeg)

E assim obtém-se a ordenada na origem (a)(a)(a)﻿ e o declive da reta (b)(b)(b)﻿:

🧮

{a=y‾−bx‾b=∑i=1n(xi−x‾)(yi−y‾)∑i=1n(xi−x‾)2=∑i=1nxiyi−nx‾y‾∑i=1nxi2−nx‾2==rxy×sysx\begin{cases} \text{$a = \overline y - b\overline x$}\\ \\ \text{$b = \frac{\sum_{i=1}^n (x_i - \overline x)(y_i - \overline y)}{\sum_{i=1}^n (x_i - \overline x)^2} = \frac {\sum_{i=1}^n x_iy_i - n\overline x \overline y}{\sum_{i=1}^n x_i^2 - n \overline x^2} = \frac {}{} = r_{xy} \times \frac {s_y}{s_x}$} \end{cases}⎩⎨⎧​a=y​−bxb=∑i=1n​(xi​−x)2∑i=1n​(xi​−x)(yi​−y​)​=∑i=1n​xi2​−nx2∑i=1n​xi​yi​−nxy​​=​=rxy​×sx​sy​​​﻿

- x‾=1n∑i=1nxi   e   y‾=1n∑i=1nyi    (meˊdia amostral)\overline x = \frac{1}{n} \sum_{i=1}^n x_i \ \ \ \text{e} \ \ \ \overline y = \frac {1}{n} \sum_{i=1}^n y_i \ \ \ \ \text{(média amostral)}x=n1​∑i=1n​xi​   e   y​=n1​∑i=1n​yi​    (meˊdia amostral)﻿;

- sx2=1n−1∑i=1n(xi−x‾)2    e    sy2=1n−1∑i=1n(yi−y‾)2   variaˆncia amostral;s_x^2 = \frac {1}{n-1} \sum_{i=1}^n (x_i - \overline x)^2 \ \ \ \ \text{e} \ \ \ \ s_y^2 = \frac {1}{n-1} \sum_{i=1}^n (y_i - \overline y)^2 \ \ \ \text{variância amostral;}sx2​=n−11​∑i=1n​(xi​−x)2    e    sy2​=n−11​∑i=1n​(yi​−y​)2   variaˆncia amostral;﻿

- sxy=1n−1∑i=1n(xi−x‾)(yi−y‾)=1n−1(∑i=1nxiyi−nx‾y‾)   (covariaˆncia amostral),s_{xy} = \frac {1}{n-1} \sum_{i=1}^n (x_i - \overline x)(y_i - \overline y) = \frac {1}{n-1}(\sum_{i=1}^n x_iy_i - n \overline x \overline y) \ \ \ \text {(covariância amostral),}sxy​=n−11​∑i=1n​(xi​−x)(yi​−y​)=n−11​(∑i=1n​xi​yi​−nxy​)   (covariaˆncia amostral),﻿

- rxy=sxysxsx   (coeficiente de correlac¸a˜o linear empıˊrico).)r_{xy} = \frac {s_{xy}}{s_xs_x} \ \ \ \text{(coeficiente de correlação linear empírico).)}rxy​=sx​sx​sxy​​   (coeficiente de correlac¸​a˜o linear empıˊrico).)﻿

Exemplo 1

Um psicólogo efetuou uma pesquisa com o objetivo de analisar a forma como as crianças aprendem um determinado jogo. Das diversas variáveis observadas foram registados o número de jogos efetuados (X)(X)(X)﻿ e o número de erros realizados no jogo (Y)(Y)(Y)﻿:

[![](Dashboard/Attachments/6F6BDD64-0A79-44B3-AFA7-372CD0461904%202.jpeg)](3%20Reta%20de%20Regress%C3%A3o/6F6BDD64-0A79-44B3-AFA7-372CD0461904.jpeg)

1. Determine a reta de regressão.

[![](Dashboard/Attachments/404D0F33-8A57-4B7B-BDDE-0F1041C1878F.jpeg)](3%20Reta%20de%20Regress%C3%A3o/404D0F33-8A57-4B7B-BDDE-0F1041C1878F.jpeg)

![](Dashboard/Attachments/icons_questions%2011.png)

The **Sentence Method** is a simplified way to record notes on the fly. You should revisit your note after it is complete to restructure the information for easier reviewing later.