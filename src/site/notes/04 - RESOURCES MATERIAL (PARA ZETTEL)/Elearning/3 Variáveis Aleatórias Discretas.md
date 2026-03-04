---
{"tags":["elearning"],"dg-publish":true,"dg-note-icon":"lackluster","noteIcon":"lackluster","permalink":"/04-resources-material-para-zettel/elearning/3-variaveis-aleatorias-discretas/","dgPassFrontmatter":true,"created":"2026-02-03T09:43:48.182+00:00","updated":"2026-02-03T09:43:48.183+00:00"}
---


![](Dashboard/Attachments/icons_notes--sentence%2013.png)

# 3. Variáveis Aleatórias Discretas

|   |   |
|---|---|
|![](Dashboard/Attachments/arrow-northeast_gray%201184.svg)Subject|[![](Dashboard/Attachments/icons_graduate%2013.png)4. Distribuições Teóricas](../Subjects/4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%209a10eaba10f74467ae7119be5e92ac2f.html)|
|![](Dashboard/Attachments/calendar_gray%201246.svg)Date Created|@June 16, 2022|
|![](Dashboard/Attachments/checkmark-square_gray%20665.svg)To Review?||
|![](Dashboard/Attachments/formula_gray%20484.svg)Review Due||
|![](Dashboard/Attachments/clock_gray%20116.svg)Last Edited|@June 28, 2022 10:59 AM|

[Função de Probabilidade (f.p.)](#fce8c000-e7da-43ae-93c4-9dfa7234a43c)

[Função de probabilidade = f(x)](#9723b5af-e63d-4d66-a9ad-57efff4e19a8)

[Exemplo 6](#2b0f4f21-b0db-437c-bd6c-e2926df67a1b)

[Função de Distribuição (f.d.)](#93e9da0d-b940-4db7-8c65-682f5822b201)

[Exemplo 6](#229849ed-e587-4443-960f-86a3c88ff91c)

[Exemplo 9](#7bc80041-becf-4680-9d17-d15d0dd94c54)

[Valor Esperado ou Média ou Esperança Matemática](#3fd4865d-4e46-477b-8718-79bc523de044)

[Observação](#d3fd56ce-5f2a-4fcf-9f63-b86b7c3c10ba)

[Exemplo 6](#4f1684b5-f34f-4add-90a9-07c337cea4f9)

[Exemplo 6](#d7fcb5d2-3a86-48e5-957f-7055a9a68893)

[Variância = V[ ]](#7c21d8c3-e396-4cd2-a874-5ebef837a068)

[Observação](#4e6f66ac-0a23-4774-b0e3-48ac17c8a018)

[Desvio Padrão](#fd1c268a-952c-42ca-8e38-7fb81e4c89f7)

[Observação](#eed0cea0-244c-4b70-96fb-d8b974c9e9ab)

[Exemplo 6](#af6d6221-b85a-4753-8731-1f73ab1ca8b7)

[Exemplo 9](#635a59bb-c45b-4dc5-bce1-96751ed3ee5c)

Uma variável aleatória diz-se Discreta se pode assumir um número finito ou infinito numerável de valores.

Uma variável aleatória discreta fica perfeitamente identificada através da:

- **Função de probabilidade**

Ou

- **Função de distribuição**

E através dos seus parâmetros (apenas vamos considerar 3):

- **Valor esperado** ou média ou esperança matemática

- **Variância**

- **Desvio padrão**

# Função de Probabilidade (f.p.)

Se XXX﻿ é uma variável aleatória discreta, que assume valores distintos x1,x2,…,xnx_1, x_2, …, x_nx1​,x2​,…,xn​﻿, então a função de probabilidade (ou função massa de probabilidade) é representada por f(x)f(x)f(x)﻿ e é definida por

f(x)=P(X=x)={P(X=x)  ,x=xj0                  ,x≠xj    j=1,…,nf(x) = P(X = x) = \begin{cases} \text{$P(X = x) \ \ , x=x_j$} \\ \text{$0 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ , x\neq x_j $} \end{cases} \ \ \ \ j=1, …, nf(x)=P(X=x)={P(X=x)  ,x=xj​0                  ,x=xj​​    j=1,…,n﻿

Ou esquematicamente por

|xxx|x1x_1x1​|x2x_2x2​|…|xjx_jxj​|…|xnx_nxn​|
|---|---|---|---|---|---|---|
|f(x)f(x)f(x)|P(X=x1)P(X=x_1)P(X=x1​)|P(X=x2)P(X=x_2)P(X=x2​)|…|P(X=xj)P(X=x_j)P(X=xj​)|…|P(X=xn)P(X=x_n)P(X=xn​)|

e satisfaz as seguintes propriedades

1. f(x)≥0,∀xf(x) ≥ 0, \forall xf(x)≥0,∀x﻿;

2. ∑xf(x)=1\sum_x f(x) = 1∑x​f(x)=1﻿.

# Função de probabilidade = f(x)

- Nas variáveis aleatórias **discretas** tem-se a **função de probabilidade** que permite calcular as probabilidades pontuais:
    
    F(x)=P(X=x)F(x) = P(X=x)F(x)=P(X=x)﻿
    
    (**Observação:** corresponde à coluna das frequências relativas nas tabelas de frequências)
    

- Como a variável aleatória discreta tem um domínio numerável (finito ou infinito), a função de probabilidade indica o comportamento probabilístico ponto a ponto do domínio.

- A forma mais usual de representar uma função de probabilidade é recorrendo a uma tabela, na primeira linha são colocados os pontos do domínio (os valores que não estão representados na tabela significa que têm probabilidade zero de acontecer) e na segunda linha coloca-se a respetiva probabilidade pontual.

- Graficamente as funções de probabilidade são representadas por gráficos de barras.

- Podemos ver alguns exemplos de representações da função de probabilidade de variáveis aleatórias discretas:

[![](Dashboard/Attachments/6555D64A-9923-436D-BB38-251648E5E82E.jpeg)](3%20Vari%C3%A1veis%20Aleat%C3%B3rias%20Discretas/6555D64A-9923-436D-BB38-251648E5E82E.jpeg)

No entanto é necessário ter atenção que uma função f(x)f(x)f(x)﻿ só é uma **função de probabilidade** se verificar as seguintes propriedades:

1. f(x)≥0,∀x;f(x) ≥ 0, \forall x;f(x)≥0,∀x;﻿

2. ∑xf(x)=1.\sum_x f(x) = 1.∑x​f(x)=1.﻿

Ou seja, a função de probabilidade não pode ser negativa e a soma de todas as probabilidades pontuais é 1.

Exemplo 6

Seja XXX﻿ uma variável aleatória discreta que representa o número de pessoas que visitam, por dia, um determinado site e seja fff﻿ a sua função de probabilidade representada por:

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|xxx|0|1|2|3|4|5|
|f(x)f(x)f(x)|0.04|0.5|0.24|0.12|0.05|0.50|

1. Mostre que fff﻿ é de facto uma função de probabilidade.

O domínio da variável aleatória XXX﻿ é DX={0,1,2,3,4,5}D_X = \{0,1,2,3,4,5\}DX​={0,1,2,3,4,5}﻿

f(x)f(x) f(x)﻿ é uma função de probabilidade sse

1. f(x)≥0,  ∀x;f(x) ≥ 0, \ \ \forall x;f(x)≥0,  ∀x;﻿

2. ∑xf(x)=1.\sum_x f(x) = 1.∑x​f(x)=1.﻿

**Propriedade 1**:

f(0)=0.04≥0; f(3)=0.12≥0;f(1)=0.5≥0;   f(4)=0.05≥0;f(2)=0.24≥0; f(5)=0.05≥0f(x)=0≥0 se x∉DXf(0) = 0.04 ≥ 0; \ f(3) = 0.12 ≥ 0; \\ f(1) = 0.5 ≥ 0; \ \ \ f(4) = 0.05 ≥ 0; \\ f(2) = 0.24 ≥ 0; \ f(5) = 0.05 ≥ 0 \\f(x) = 0 \geq 0 \ \text{se} \ x \notin D_Xf(0)=0.04≥0; f(3)=0.12≥0;f(1)=0.5≥0;   f(4)=0.05≥0;f(2)=0.24≥0; f(5)=0.05≥0f(x)=0≥0 se x∈/DX​﻿

**Propriedade 2**:

∑xf(x)=f(0)+f(1)+f(2)+f(3)+f(4)+f(5)=0.04+0.5+0.24+0.12+0.05+0.05=1\sum_x f(x) = f(0) + f(1) + f(2) + f(3) + f(4) + f(5) = 0.04 + 0.5 + 0.24 + 0.12 + 0.05 + 0.05 = 1∑x​f(x)=f(0)+f(1)+f(2)+f(3)+f(4)+f(5)=0.04+0.5+0.24+0.12+0.05+0.05=1﻿

Como verifica as duas propriedades, então é função de probabilidade.

2. Calcule

a. P(X=3)=f(3)=0.12P(X=3) = f(3) = 0.12P(X=3)=f(3)=0.12﻿

b. P(X≤3)=f(0)+f(1)+f(2)+f(3)=0.04+0.5+0.24+0.12=0.9P(X≤3) = f(0) + f(1) + f(2) + f(3) = 0.04 + 0.5 + 0.24 + 0.12 = 0.9P(X≤3)=f(0)+f(1)+f(2)+f(3)=0.04+0.5+0.24+0.12=0.9﻿

c. P(X<3)=f(0)+f(1)+f(2)=0.04+0.5+0.24=0.78P(X < 3) = f(0) + f(1) + f(2) = 0.04 + 0.5 + 0.24 = 0.78P(X<3)=f(0)+f(1)+f(2)=0.04+0.5+0.24=0.78﻿

d. P(X>3)=1−P(X≤3)=1−0.9=0.1P(X>3) = 1 - P(X≤ 3) = 1- 0.9 = 0.1P(X>3)=1−P(X≤3)=1−0.9=0.1﻿

d. P(X>3)=f(4)+f(5)=0.05+0.05=0.1P(X>3) = f(4) + f(5) = 0.05 + 0.05 = 0.1P(X>3)=f(4)+f(5)=0.05+0.05=0.1﻿

e. P(X≥3)=1−P(X<3)=1−0.78=0.22P(X≥ 3) = 1-P(X<3) = 1-0.78 = 0.22 P(X≥3)=1−P(X<3)=1−0.78=0.22﻿

e. P(X≥3)=f(3)+f(4)+f(5)=0.12+0.05+0.05=0.22P(X≥ 3) = f(3) + f(4) + f(5) = 0.12 + 0.05 + 0.05 = 0.22P(X≥3)=f(3)+f(4)+f(5)=0.12+0.05+0.05=0.22﻿

f. P(3≤X<5)=f(3)+f(4)=0.12+0.05=0.17P(3 ≤ X < 5) = f(3) + f(4) = 0.12 + 0.05 = 0.17P(3≤X<5)=f(3)+f(4)=0.12+0.05=0.17﻿

g. P(3<X≤5)=f(4)+f(5)=0.05+0.05=0.1P(3< X ≤ 5) = f(4) + f(5) = 0.05 + 0.05 = 0.1P(3<X≤5)=f(4)+f(5)=0.05+0.05=0.1﻿

h. P(X>3∣X<5)=P(X>3∧X<5)P(X<5)=P(3<X<5)1−P(X=5)=f(4)1−f(5)=0.051−0.05=0.0526P(X > 3 | X < 5) = \frac {P(X>3 \wedge X <5)}{P(X<5)} = \frac {P(3<X<5)}{1- P(X=5)} = \frac {f(4)}{1-f(5)} = \frac {0.05}{1-0.05} = 0.0526P(X>3∣X<5)=P(X<5)P(X>3∧X<5)​=1−P(X=5)P(3<X<5)​=1−f(5)f(4)​=1−0.050.05​=0.0526﻿

# Função de Distribuição (f.d.)

Se XXX﻿ é uma variável aleatória discreta, que assume valores distintos {x1,x2,…,xn}\{ x_1, x_2, …, x_n \}{x1​,x2​,…,xn​}﻿, então a função de distribuição (ou função de distribuição acumulada) é representada por F(x) e é definida por  
F(x)=P(X≤x)=∑xi≤xf(xi)F(x) = P(X ≤ x) = \sum_{x_i ≤ x} f(x_i)F(x)=P(X≤x)=∑xi​≤x​f(xi​)﻿

isto é,

F(x)={0                                                      ,x<x1P(X=x1)                                     ,x1≤x<x2P(X=x1)+P(X=x2)              ,x2≤x<x3...P(X=x1)+...+P(X=xn−1)  ,xn−1≤x<xn1                                                      ,x≥xnF(x) = \begin{cases} 0 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ , x < x_1 \\ P(X = x_1) \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ , x_1 \leq x < x_2 \\ P(X=x_1)+P(X=x_2) \ \ \ \ \ \ \ \ \ \ \ \ \ \ , x_2 \leq x < x_3 \\ ... \\ P(X=x_1) + ... + P(X = x_{n-1}) \ \ , x_{n-1} \leq x < x_n\\ 1 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ , x \geq x_n \end{cases}F(x)=⎩⎨⎧​0                                                      ,x<x1​P(X=x1​)                                     ,x1​≤x<x2​P(X=x1​)+P(X=x2​)              ,x2​≤x<x3​...P(X=x1​)+...+P(X=xn−1​)  ,xn−1​≤x<xn​1                                                      ,x≥xn​​﻿

e satisfaz as seguintes propriedades:

1. 0≤F(x)≤1;0 ≤ F(x) ≤ 1;0≤F(x)≤1;﻿

2. F(x)F(x)F(x)﻿ é uma função não decrescente;

3. F(x)F(x)F(x)﻿ é contínua à direita;

4. lim⁡x→−∞F(X)=0   e   lim⁡x→+∞F(X)=1;\lim_{x→- \infty} F(X) = 0 \ \ \ \text{e} \ \ \ \lim_{x→+ \infty} F(X) = 1;limx→−∞​F(X)=0   e   limx→+∞​F(X)=1;﻿

5. P(X=a)=F(a)−P(X<a);P(X=a) = F(a) - P(X < a);P(X=a)=F(a)−P(X<a);﻿

6. P(a<X≤b)=F(b)−F(a);P(a < X ≤ b) = F(b) - F(a);P(a<X≤b)=F(b)−F(a);﻿
    
    P(a<X<b)=F(b)−F(a)−P(X=b);P(a < X < b) = F(b) - F(a) - P(X=b);P(a<X<b)=F(b)−F(a)−P(X=b);﻿
    
    P(a≤X≤b)=F(b)−F(a)+P(X=a);P(a ≤ X ≤ b) = F(b) - F(a) + P(X=a);P(a≤X≤b)=F(b)−F(a)+P(X=a);﻿
    
    P(a≤X<b)=F(b)−F(a)−P(X=b)+P(X=a);P(a ≤ X < b) = F(b) - F(a) - P(X=b) + P(X=a);P(a≤X<b)=F(b)−F(a)−P(X=b)+P(X=a);﻿
    

- A função de distribuição de uma variável aleatória discreta permite calcular as probabilidades acumuladas:
    
    F(x)=P(X≤x)F(x) = P(X≤x)F(x)=P(X≤x)﻿
    
    (**Observação:** corresponde à coluna das frequências relativas acumuladas nas tabelas de frequências)
    

- a ideia é ir somando cada uma das probabilidades pontuais. Ou seja, começamos com uma “caixa vazia” e depois colocamos cada uma das probabilidades pontuais uma a uma e a função distribuição vai indicando qual a probabilidade que se vai obtendo à medida que se vai enchendo a “caixa”.

- O domínio da função de distribuição é sempre R\mathbb{R}R﻿.

- O menor valor da função de distribuição é sempre zero (“caixa vazia”) e o maior valor da função de distribuição é sempre 1 (“caixa cheia”).

- A função distribuição de uma variável aleatória é uma função não decrescente e contínua à direita.

- Graficamente a função distribuição de uma variável aleatória discreta é um gráfico em escada, em que a altura de cada degrau corresponde ao valor da função de probabilidade.

- Podemos ver alguns exemplos de representações de funções de distribuição de variáveis aleatórias discretas:

[![](Dashboard/Attachments/ED67FE96-85D7-4121-A10C-E0915DB28A29.jpeg)](3%20Vari%C3%A1veis%20Aleat%C3%B3rias%20Discretas/ED67FE96-85D7-4121-A10C-E0915DB28A29.jpeg)

[![](Dashboard/Attachments/2629932E-CD1F-4375-8BDB-842C763F3D1E.jpeg)](3%20Vari%C3%A1veis%20Aleat%C3%B3rias%20Discretas/2629932E-CD1F-4375-8BDB-842C763F3D1E.jpeg)

Exemplo 6

Seja XXX﻿ uma variável aleatória discreta que representa o número de pessoas que visitam, por dia, um determinado site e seja fff﻿ a sua função de probabilidade representada por:

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|xxx|0|1|2|3|4|5|
|f(x)f(x)f(x)|0.04|0.5|0.24|0.12|0.05|0.50|

3. Calcule a função de distribuição.

[![](Dashboard/Attachments/4F3FCEB6-F016-4751-950E-6E06D6D733A5.jpeg)](3%20Vari%C3%A1veis%20Aleat%C3%B3rias%20Discretas/4F3FCEB6-F016-4751-950E-6E06D6D733A5.jpeg)

[![](Dashboard/Attachments/E9B8FE1B-87A2-43AF-9313-96E20F40CBDD.jpeg)](3%20Vari%C3%A1veis%20Aleat%C3%B3rias%20Discretas/E9B8FE1B-87A2-43AF-9313-96E20F40CBDD.jpeg)

4. Calcule (sempre que possível use apenas a função de distribuição)

a) P(X≤3)=F(3)=0.90P(X ≤ 3) = F(3) = 0.90P(X≤3)=F(3)=0.90﻿

B) P(X<3)=P(X≤2)=F(2)=0.78P(X < 3) = P(X ≤ 2) = F(2) = 0.78P(X<3)=P(X≤2)=F(2)=0.78﻿

C) P(X=3)=F(3)−F(2)=0.90−0.78=0.12P(X=3)=F(3) - F(2) = 0.90 - 0.78 = 0.12P(X=3)=F(3)−F(2)=0.90−0.78=0.12﻿

C) P(X=3)=f(3)=0.12P(X=3)=f(3) = 0.12P(X=3)=f(3)=0.12﻿

D) P(X>3)=1−P(X≤3)=1−F(3)=1−0.9=0.1P(X>3)=1-P(X≤3)=1-F(3) = 1-0.9=0.1P(X>3)=1−P(X≤3)=1−F(3)=1−0.9=0.1﻿

E) P(X≥3)=1−P(X<3)=1−P(X≤2)=1−F(2)=1−0.78=0.22P(X≥3)=1-P(X<3)=1-P(X≤2) =1-F(2) = 1- 0.78 = 0.22P(X≥3)=1−P(X<3)=1−P(X≤2)=1−F(2)=1−0.78=0.22﻿

F) P(3<X≤5)=F(5)−F(3)=1−0.90=0.1P(3<X≤5)=F(5)-F(3)=1-0.90=0.1P(3<X≤5)=F(5)−F(3)=1−0.90=0.1﻿

G) P(3≤X≤5)=P(2<X≤5)=F(5)−F(2)=1−0.78=0.22P(3≤X≤5)=P(2<X≤5)=F(5)-F(2)= 1-0.78=0.22P(3≤X≤5)=P(2<X≤5)=F(5)−F(2)=1−0.78=0.22﻿

G) P(3≤X≤5)=F(5)−F(3)+f(3)=1−0.90+0.12=0.22P(3≤X≤5)=F(5)-F(3)+f(3)=1-0.90+0.12=0.22P(3≤X≤5)=F(5)−F(3)+f(3)=1−0.90+0.12=0.22﻿

h) P(3≤X<5)=P(2<X≤4)=F(4)−F(2)=0.95−0.78=0.17P(3≤X<5)=P(2<X≤4)=F(4)-F(2)=0.95-0.78=0.17P(3≤X<5)=P(2<X≤4)=F(4)−F(2)=0.95−0.78=0.17﻿

H) P(3≤X<5)=F(5)−F(3)−f(5)+f(3)=1−0.9−0.05+0.12=0.17P(3≤X<5)=F(5)-F(3)-f(5)+f(3) = 1-0.9-0.05+0.12=0.17P(3≤X<5)=F(5)−F(3)−f(5)+f(3)=1−0.9−0.05+0.12=0.17﻿

I) P(3<X<5)=P(3<X≤4)=F(4)−F(3)=0.95−0.9=0.05P(3<X<5)=P(3<X≤4)=F(4)-F(3) = 0.95-0.9=0.05P(3<X<5)=P(3<X≤4)=F(4)−F(3)=0.95−0.9=0.05﻿

I) P(3<X<5)=F(5)−F(3)−f(5)=1−0.9−0.05=0.05P(3<X<5)=F(5)-F(3)-f(5) = 1-0.9-0.05=0.05P(3<X<5)=F(5)−F(3)−f(5)=1−0.9−0.05=0.05﻿

5. Sabendo que 90% dos dias no máximo kkk﻿ pessoas visitam o site, determine kkk﻿.

Pretende-se determinar kkk﻿ tal que

P(X≤k)=0.90⇔F(k)=0.90⇔3≤k<4P(X≤k) = 0.90 \Leftrightarrow F(k) = 0.90 \Leftrightarrow 3≤k<4P(X≤k)=0.90⇔F(k)=0.90⇔3≤k<4﻿

Ou seja, k=3k=3k=3﻿.

Exemplo 9

Considere uma variável aleatória, XXX﻿, com a seguinte função de distribuição:

F(x)={0  ,x<−20.42  ,−2≤x<10.95  ,1≤x<31  ,x≥3F(x) = \begin{cases} 0 \ \ , x< -2 \\ 0.42 \ \ , -2≤ x <1 \\ 0.95 \ \ , 1≤ x < 3 \\ 1 \ \ , x≥ 3\end{cases}F(x)=⎩⎨⎧​0  ,x<−20.42  ,−2≤x<10.95  ,1≤x<31  ,x≥3​﻿

1. Calcule P(X>0.5)P(X>0.5)P(X>0.5)﻿.
    
    P(X>0.5)=1−P(X≤0.5)=1−F(0.5)=1−0.42=0.58P(X>0.5) = 1- P(X≤0.5) = 1- F(0.5)=1-0.42=0.58P(X>0.5)=1−P(X≤0.5)=1−F(0.5)=1−0.42=0.58﻿
    

2. Determine a função de probabilidade de XXX﻿.

A função de probabilidade é,

|   |   |   |   |
|---|---|---|---|
|xxx|−2-2−2|111|333|
|f(x)f(x)f(x)|0.420.420.42|0.530.530.53|0.050.050.05|

f(−2)=P(X=−2)=F(−2)−P(X<−2)=0.42−0=0.42f(−2) = P(X = −2) = F(−2) − P(X < −2) = 0.42 − 0 = 0.42f(−2)=P(X=−2)=F(−2)−P(X<−2)=0.42−0=0.42﻿

f(1)=P(X=1)=F(1)−F(−2)=0.95−0.42=0.53f(1) = P(X = 1) = F(1) − F(−2) = 0.95 − 0.42 = 0.53f(1)=P(X=1)=F(1)−F(−2)=0.95−0.42=0.53﻿

f(3)=P(X=3)=F(3)−F(1)=1−0.95=0.05f(3) = P(X = 3) = F(3) − F(1) = 1 − 0.95 = 0.05f(3)=P(X=3)=F(3)−F(1)=1−0.95=0.05﻿

# Valor Esperado ou Média ou Esperança Matemática

O valor esperado ou média ou esperança matemática de uma variável aleatória discreta X representa-se por

μ=μX=E[X]\mu = \mu_X = E[X]μ=μX​=E[X]﻿

e calcula-se  
μ=E[X]=∑xxf(x)\mu = E[X] = \sum_x xf(x)μ=E[X]=∑x​xf(x)﻿

### Observação

🧮

O valor esperado é um **parâmetro de localização**, que pretende localizar o centro da distribuição de probabilidade, ou seja, pretende identificar o “centro de gravidade” da variável aleatória.

- O cálculo do valor esperado de uma variável aleatória discreta XXX﻿,  
    μ=E[X]∑xxf(x)\mu = E[X] \sum_x xf(x)μ=E[X]∑x​xf(x)﻿  
    corresponde a uma média ponderada cujos pesos são as probabilidades pontuais.

Exemplo 6

Seja XXX﻿ uma variável aleatória discreta que representa o número de pessoas que visitam, por dia, um determinado site e seja fff﻿ a sua função de probabilidade representada por:

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|xxx|0|1|2|3|4|5|
|f(x)f(x)f(x)|0.04|0.5|0.24|0.12|0.05|0.50|

6. Em média quantas pessoass visitam o site diariamente?

E[X]=∑xxf(x)=0×f(0)+1×f(1)+2×f(2)+3×f(3)+4×f(4)+5×f(5)=0×0.04+1×0.5+2×0.24+3×0.12+4×0.05+5×0.05=1.79E[X] = \sum_x xf(x) = 0 \times f(0) + 1 \times f(1) + 2 \times f(2) + 3 \times f(3) + 4 \times f(4) + 5 \times f(5) = 0 \times 0.04 + 1 \times 0.5 + 2 \times 0.24 + 3 \times 0.12 + 4 \times 0.05 + 5 \times 0.05 = 1.79E[X]=∑x​xf(x)=0×f(0)+1×f(1)+2×f(2)+3×f(3)+4×f(4)+5×f(5)=0×0.04+1×0.5+2×0.24+3×0.12+4×0.05+5×0.05=1.79﻿ visitas diaˊrias \text{\ visitas diárias} visitas diaˊrias﻿

- Atenção E[]E[]E[]﻿ representa uma função que calcula uma média, ou seja, calcula a média do que se colocar “dentro” da função.

- No exemplo anterior pretendia-se a média da variável aleatória discreta XXX﻿, logo a função valor esperado ficou E[X]=∑xxf(x)E[X] = \sum_x xf(x)E[X]=∑x​xf(x)﻿

- Se pretender calcular a média de uma transformação da variável aleatória discreta XXX﻿, por exemplo g(X)g(X)g(X)﻿, então o seu valor médio é  
    E[g(X)]=∑xg(x)f(x)E[g(X)] = \sum_x g(x)f(x)E[g(X)]=∑x​g(x)f(x)﻿

- Algumas das propriedades da função valor esperado são:

Sejam XXX﻿ uma variável aleatória discreta e aaa﻿ e bbb﻿ constantes reais.

1. Se X=aX=aX=a﻿, então E[X]=E[a]=a;E[X] = E[a] = a;E[X]=E[a]=a;﻿

2. E[aX+b]=aE[X]+bE[aX + b] = aE[X] + bE[aX+b]=aE[X]+b﻿;

3. Sejam g(X)g(X)g(X)﻿ e h(X)h(X)h(X)﻿ funções de XXX﻿  
    E[g(X)+h(X)]=E[g(X)]+E[h(X)]E[g(X) + h(X)] = E[g(X)] + E[h(X)]E[g(X)+h(X)]=E[g(X)]+E[h(X)]﻿

De forma simplista, as propriedades da função valor esperado são:

1. O valor esperado de uma constante é a própria constante.

2. Se efetuar uma transformação na variável aleatória XXX﻿ que apenas depende de constantes (multiplicar por uma constante e/ou somar uma constante), então para calcular o valor esperado dessa transformação basta efetuar exatamente a mesma transformação no valor esperado da variável aleatória XXX﻿. Pois apenas efetuou uma mudança de escala na variável aleatória XXX﻿, logo basta efetuar a mesma mudança de escala no valor esperado da variável aleatória XXX﻿.

3. O valor esperado da soma de transformações na variável aleatória XXX﻿ é igual a somar os valores esperados de cada uma das transformações.

Exemplo 6

Seja XXX﻿ uma variável aleatória discreta que representa o número de pessoas que visitam, por dia, um determinado site e seja fff﻿ a sua função de probabilidade representada por:

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|xxx|0|1|2|3|4|5|
|f(x)f(x)f(x)|0.04|0.5|0.24|0.12|0.05|0.50|

7. Calcule E[3X−2]E[3X-2]E[3X−2]﻿.

Recorrendo à propriedade E[aX+b]=aE[X]+bE[aX+b]=aE[X] + bE[aX+b]=aE[X]+b﻿ tem-se E[3X−2]=3E[X]−2=3×1.79−2=3.37E[3X-2] = 3E[X] - 2 = 3 \times 1.79 - 2 = 3.37E[3X−2]=3E[X]−2=3×1.79−2=3.37﻿

Claro que também era possível calcular E[3X−2]E[3X-2]E[3X−2]﻿ sem usar a propriedade:  

E[3X−2]=∑x(3x−2)×f(x)=(3×0−2)×f(0)+(3×1−2)×f(1)+(3×2−2)×f(2)+(3×3−2)×f(3)×(3×4−2)×f(4)+(3×5−2)×f(5)=(3×0−2)×0.04+(3×1−2)×0.5+(3×2−2)×0.24+(3×3−2)×0.12+(3×4−2)×0.05+(3×5−2)×0.05=3.37E [3X − 2] = \sum_x (3x − 2) \times f(x) = (3 \times 0 − 2) \times f(0) + (3 \times 1 − 2) \times f(1) + (3 \times 2 − 2) \times f(2)+(3 \times 3 − 2) \times f(3) \times (3 \times 4 − 2) \times f(4) + (3 \times 5 − 2) \times f(5) = (3 \times 0 − 2) \times 0.04 + (3 \times 1 − 2) \times 0.5 + (3 \times 2 − 2) \times 0.24+(3 \times 3 − 2) \times 0.12 + (3 \times 4 − 2) \times 0.05 + (3 \times 5 − 2) \times 0.05 = 3.37E[3X−2]=∑x​(3x−2)×f(x)=(3×0−2)×f(0)+(3×1−2)×f(1)+(3×2−2)×f(2)+(3×3−2)×f(3)×(3×4−2)×f(4)+(3×5−2)×f(5)=(3×0−2)×0.04+(3×1−2)×0.5+(3×2−2)×0.24+(3×3−2)×0.12+(3×4−2)×0.05+(3×5−2)×0.05=3.37﻿

# Variância = V[ ]

A variância de uma variável aleatória discreta X representa-se por σ2=σX2=Var[X]=V[X]=E[(X−μ)2]\sigma^2 = \sigma_X^2 = Var[X] = V[X] = E[(X - \mu)^2]σ2=σX2​=Var[X]=V[X]=E[(X−μ)2]﻿  
e calcula-se  
σ2=V[X]=∑x(x−μ)2f(x)\sigma^2 = V[X] = \sum_x (x- \mu)^2 f(x)σ2=V[X]=∑x​(x−μ)2f(x)﻿

## Observação

==A variância é um== ==**parâmetro de dispersão**====. Mede a dispersão (ao quadrado) da variável aleatória em torno do seu valor esperado.==

- A variância corresponde a um valor médio, neste caso ao valor médio das diferenças ao quadrado em relação à média da variável aleatória:  
    σ2=V[X]=E[(X−μ)2]\sigma^2 = V[X] = E[(X - \mu)^2]σ2=V[X]=E[(X−μ)2]﻿  
    com μ=E[X]\mu = E[X]μ=E[X]﻿.

- Portanto o seu cálculo é simples se recorrermos à observação feita em relação à função valor esperado:
    
    E[g(X)]=∑xg(x)f(x)E[g(X)] = \sum_x g(x)f(x)E[g(X)]=∑x​g(x)f(x)﻿  
    portanto tem-se  
    σ2=V[X]=E[(X−μ)2]=∑x(x−μ)2f(x)\sigma^2 = V[X] = E[(X-\mu )^2] = \sum_x(x-\mu)^2f(x)σ2=V[X]=E[(X−μ)2]=∑x​(x−μ)2f(x)﻿  
    com μ=E[X]\mu = E[X]μ=E[X]﻿.
    

- A variância goza das seguintes propriedades:
    
    Sejam XXX﻿ uma variável aleatória discreta e aaa﻿ e bbb﻿ constantes reais.
    
    1. V[X]=E[X2]−E2[X];V[X] = E[X^2] - E^2[X];V[X]=E[X2]−E2[X];﻿
    
    2. V[X]≥0;V[X] ≥ 0;V[X]≥0;﻿
    
    3. Se X=aX=aX=a﻿, então V[X]=V[a]=0;V[X] = V[a] = 0;V[X]=V[a]=0;﻿
    
    4. V[aX+b]=a2V[X].V[aX+b] = a^2V[X].V[aX+b]=a2V[X].﻿

De forma simplista, as propriedades da variância são:

1. V[X]=E[X2]−E2[X]V[X] = E[X^2] - E^2[X]V[X]=E[X2]−E2[X]﻿ forma alternativa para calcular a variância.

2. Não há variâncias negativas.

3. A variância de uma constante é nula pois não há qualquer variabilidade.

4. Se efetuar uma transformação na variável aleatória XXX﻿ que apenas depende de constantes (multiplicar por uma constante e/ou somar uma constante), então para calcular a variância dessa transformação só interessa a constante que foi multiplicada e basta multiplicar essa constante ao quadrado à variância da variável aleatória XXX﻿. Pois a dispersão só é alterada quando se multiplica uma constante, a soma de uma constante apenas muda a escala dos dados mas não altera a dispersão dos dados.

# Desvio Padrão

O desvio padrão de uma variável aleatória discreta XXX﻿ representa-se por  
σ=σX\sigma = \sigma_Xσ=σX​﻿  
e calcula-se  
σ=σX=V[X]\sigma = \sigma_X = \sqrt{V[X]}σ=σX​=V[X]​﻿

## Observação

O desvio padrão é um **parâmetro de dispersão**, é a raiz quadrada da variância. Mede a dispersão da variável aleatória em torno do seu valor esperado na mesma unidade de medida em que a variável aleatória vem expressa.

Exemplo 6

Seja XXX﻿ uma variável aleatória discreta que representa o número de pessoas que visitam, por dia, um determinado site e seja fff﻿ a sua função de probabilidade representada por:

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|xxx|0|1|2|3|4|5|
|f(x)f(x)f(x)|0.04|0.5|0.24|0.12|0.05|0.50|

8. Calcule a variância da variável aleatória XXX﻿.

Pretende-se a variância de XXX﻿, σ2=V[X]\sigma^2 = V[X]σ2=V[X]﻿:

- Usando a **definição** tem-se:V[X]=E[(X−μ)2]=∑x(x−μ)2f(x)=(tem-se μ=E[X]=1.79)=E[(X−1.79)2]=∑x(x−1.79)2f(x)=(0−1.79)2×f(0)+(1−1.79)2×f(1)+(2−1.79)2×f(2)+(3−1.79)2×f(3)+(4−1.79)2×f(4)+(5−1.79)2×f(5)=(0−1.79)2×0.04+(1−1.79)2×0.5+(2−1.79)2×0.24+(3−1.79)2×0.12+(4−1.79)2×0.05+(5−1.79)2×0.05=1.3859 visitas diaˊrias2V[X] = E[(X − \mu)^2] = \sum_x(x − \mu)^2 f(x) = \\(\text{tem-se} \ \mu = E[X] = 1.79) \\ = E[(X − 1.79)^2] = \sum_x (x − 1.79)^2 f(x) = (0 − 1.79)^2 \times f(0) + (1 − 1.79)^2 \times f(1) + (2 − 1.79)^2 \times f(2)+(3 − 1.79)^2 \times f(3) + (4 − 1.79)^2 \times f(4) + (5 − 1.79)^2 \times f(5) = (0 − 1.79)^2 \times 0.04 + (1 − 1.79)^2 \times 0.5 + (2 − 1.79)^2 \times 0.24+(3 − 1.79)^2 \times 0.12 + (4 − 1.79)^2 \times 0.05 + (5 − 1.79)^2 \times 0.05 = 1.3859 \text{ visitas diárias$^2$}V[X]=E[(X−μ)2]=∑x​(x−μ)2f(x)=(tem-se μ=E[X]=1.79)=E[(X−1.79)2]=∑x​(x−1.79)2f(x)=(0−1.79)2×f(0)+(1−1.79)2×f(1)+(2−1.79)2×f(2)+(3−1.79)2×f(3)+(4−1.79)2×f(4)+(5−1.79)2×f(5)=(0−1.79)2×0.04+(1−1.79)2×0.5+(2−1.79)2×0.24+(3−1.79)2×0.12+(4−1.79)2×0.05+(5−1.79)2×0.05=1.3859 visitas diaˊrias2﻿

- Usando a propriedade V[X]=E[X2]−E2[X]V[X] = E[X^2] - E^2[X]V[X]=E[X2]−E2[X]﻿ tem-se:  
    E[X]=1.79E[X] = 1.79E[X]=1.79﻿  
    E[X2]=∑xx2f(x)=02×f(0)+12×f(1)+22×f(2)+32×f(3)+42×f(4)+52×f(5)=02×0.04+12×0.5+22×0.24+32×0.12+42×0.05+52×0.05=4.59E[X^2] = \sum_x x^2f(x) = 0^2 \times f(0) + 1^2 \times f(1) + 2^2 \times f(2) + 3^2 \times f(3) + 4^2 \times f(4) + 5^2 \times f(5) = 0^2 \times 0.04 + 1^2 \times 0.5 + 2^2 \times 0.24 + 3^2 \times 0.12 + 4^2 \times 0.05 + 5^2 \times 0.05 = 4.59E[X2]=∑x​x2f(x)=02×f(0)+12×f(1)+22×f(2)+32×f(3)+42×f(4)+52×f(5)=02×0.04+12×0.5+22×0.24+32×0.12+42×0.05+52×0.05=4.59﻿  
    V[X]=E[X2]−E2[X]=4.59−1.792=1.3859V[X] = E[X^2] - E^2[X] = 4.59 - 1.79^2 = 1.3859V[X]=E[X2]−E2[X]=4.59−1.792=1.3859﻿ visitas diárias2^22﻿

9. Calcule o desvio padrão da variável aleatória XXX﻿.  
    Pretende-se o desvio padrão de XXX﻿:  
    σ=V[X]=1.3859=1.1772\sigma = \sqrt{V[X]} = \sqrt{1.3859} = 1.1772σ=V[X]​=1.3859​=1.1772﻿ visitas diárias

10. Calcule V[−3X−2]V[-3X -2]V[−3X−2]﻿.  
    Recorrendo à propriedade V[aX+b]=a2V[X]V[aX + b] = a^2V[X]V[aX+b]=a2V[X]﻿ tem-se  
    V[−3X−2]=(−3)2V[X]=9×1.3859=12.4731V[-3X - 2] = (-3)^2V[X] = 9 \times 1.3859 = 12.4731V[−3X−2]=(−3)2V[X]=9×1.3859=12.4731﻿Exemplo 9

Considere uma variável aleatória, XXX﻿, com a seguinte função de distribuição:

F(x)={0  ,x<−20.42  ,−2≤x<10.95  ,1≤x<31  ,x≥3F(x) = \begin{cases} 0 \ \ , x< -2 \\ 0.42 \ \ , -2≤ x <1 \\ 0.95 \ \ , 1≤ x < 3 \\ 1 \ \ , x≥ 3\end{cases}F(x)=⎩⎨⎧​0  ,x<−20.42  ,−2≤x<10.95  ,1≤x<31  ,x≥3​﻿

1. Calcule E[1−2X]E[1-2X]E[1−2X]﻿.

Para calcular E[X]E[X]E[X]﻿ tem de conhecer-se a função de probabilidade logo,

|   |   |   |   |
|---|---|---|---|
|xxx|−2-2−2|111|333|
|f(x)f(x)f(x)|0.420.420.42|0.530.530.53|0.050.050.05|

E[X]=∑xxf(x)=−2×0.42+1×0.53+3×0.05=−0.16E[X] = \sum_x xf(x) = -2 \times 0.42 + 1 \times 0.53 + 3 \times 0.05 = - 0.16E[X]=∑x​xf(x)=−2×0.42+1×0.53+3×0.05=−0.16﻿

Tem-se,

E[1−2X]=1−2E[X]=1−2×(−0.16)=1.32E[1-2X] = 1-2E[X] = 1-2 \times (-0.16) = 1.32E[1−2X]=1−2E[X]=1−2×(−0.16)=1.32﻿.

---

![](Dashboard/Attachments/icons_questions%2013.png)

The **Sentence Method** is a simplified way to record notes on the fly. You should revisit your note after it is complete to restructure the information for easier reviewing later.