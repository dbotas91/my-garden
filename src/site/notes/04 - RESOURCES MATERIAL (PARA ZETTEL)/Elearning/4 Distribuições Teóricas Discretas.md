---
{"tags":["elearning"],"dg-publish":true,"dg-note-icon":"lackluster","noteIcon":"lackluster","permalink":"/04-resources-material-para-zettel/elearning/4-distribuicoes-teoricas-discretas/","dgPassFrontmatter":true,"created":"2026-02-03T09:43:48.183+00:00","updated":"2026-02-03T09:43:48.183+00:00"}
---


![](Dashboard/Attachments/icons_notes--sentence%2014.png)

# 4. Distribuições Teóricas Discretas

|   |   |
|---|---|
|![](Dashboard/Attachments/arrow-northeast_gray%201185.svg)Subject|[![](Dashboard/Attachments/icons_graduate%2014.png)4. Distribuições Teóricas](../Subjects/4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%209a10eaba10f74467ae7119be5e92ac2f.html)|
|![](Dashboard/Attachments/calendar_gray%201247.svg)Date Created|@June 16, 2022|
|![](Dashboard/Attachments/checkmark-square_gray%20666.svg)To Review?||
|![](Dashboard/Attachments/formula_gray%20485.svg)Review Due||
|![](Dashboard/Attachments/clock_gray%20117.svg)Last Edited|@June 28, 2022 12:33 PM|

[Distribuição Uniforme Discreta;](#e9ca5776-6730-4001-89f3-03809871e863)

[Definição](#e5d20fa7-7606-4dc7-8e1a-ab53d8269171)

[Teorema](#0f437911-e7f0-4f6a-b2a0-a65be20ff83c)

[Caso Particular](#91902e9f-9b2e-43cd-9d13-9ceb8c2fe84d)

[Exemplo 10](#b201f231-022a-44ca-ab48-2be3c0719a71)

[Exemplo 11](#5a7bc882-cc87-460c-bff7-b36770f2b828)

[Exemplo 12](#38e4159a-d9b4-4fcf-955a-6772e4a44fb0)

[Distribuição Binomial](#dc610500-25f2-465f-b7c8-6365c5a51935)

[Provas de Bernoulli](#7dc2c3b9-b062-4ecb-a51b-16fc95acaa97)

[Exemplo 13](#d955bbd2-9f2f-4bc7-aac5-08e8dfda4087)

[Experiência Binomial](#6322cdbf-886a-4d71-bcc0-b116eb7fe07c)

[Exemplo 14](#61b0ce9b-aa16-42be-a1d6-8bbeaad33998)

[Definição](#5939a8b3-a8ec-4f70-8b7e-a3903f8e224b)

[Exemplo 14](#3c86187d-18a7-4b7f-9958-ef0069558bfd)

[Teorema](#360c1837-ccd4-44cb-95cc-ca7c73c2d5e6)

[Observação](#8acce574-0114-4799-8962-1ed741a7f97f)

[Exemplo 14](#5f540bfe-ace5-4bcd-9a6a-5661ed39cc34)

[Propriedade: Aditividade da Binomial](#1b64bc5f-971f-46a2-9b60-5986354ea0bd)

[Exemplo 15](#6a680702-9b12-4208-8bfb-73068a061344)

[Distribuição de Poisson](#ce78854d-ac7e-4e86-ab0f-f827e97cbf08)

[Processo de Poisson](#8fa126ba-e4f1-49a7-bf49-9fc245702ca4)

[Definição](#f5dc1bbd-32f4-44cc-9fa6-51b0c0bb8ae7)

[Exemplo 16](#84c8887d-f17d-4b01-a7ae-912455402e10)

[Teorema](#c06bb310-53b1-4849-9f11-3b0273d8df70)

[Propriedade: Aditividade da Poisson](#0de5c5ef-bed1-48cd-bfaf-703d8cb4c077)

[Exemplo 17](#3cf104f3-b4eb-4f75-be5a-ccf9fadd6792)

[Teorema](#dd23439e-0605-4886-ad5d-28a2617fede8)

[Observação](#0b12e45e-4581-4cc5-8b64-f02a52ac96d5)

Vamos analisar pormenorizadamente três modelos probabilísticos ou, como é usual dizer, três Distribuições Teóricas Discretas:

- Distribuição Uniforme Discreta;

- Distribuição Binomial;

- Distribuição de Poisson.

# Distribuição Uniforme Discreta;

## Definição

Diz-se que uma variável aleatória discreta XXX﻿ definida em DX={x1,x2,…,xn}D_X = \{ x_1, x_2, …, x_n \}DX​={x1​,x2​,…,xn​}﻿ tem distribuição Uniforme Discreta e representa-se por  
X∼U(n)X \sim U_{(n)}X∼U(n)​﻿

se ==assume em todos os== ==nnn==﻿ ==pontos do seu domínio a mesma probabilidade==, ou seja, se a sua função de probabilidade é dada por

|   |   |   |   |   |
|---|---|---|---|---|
|xxx|x1x_1x1​|x2x_2x2​|…|xnx_nxn​|
|f(x)f(x)f(x)|1n\frac {1}{n}n1​|1n\frac {1}{n}n1​|…|1n\frac {1}{n}n1​|

ou, de forma análoga,

f(x)=P(X=x)={1n  ,x∈DX0  , caso contraˊriof(x) = P(X=x)= \begin{cases} \frac {1}{n} \ \ , x \in D_X \\ 0 \ \ \text {, caso contrário} \end{cases}f(x)=P(X=x)={n1​  ,x∈DX​0  , caso contraˊrio​﻿

e a sua função de distribuição é dada por

F(x)=P(X≤x)=∑xi≤xf(xi)=∑xi≤x1n={0  , x<x11n  , x1≤x<x22n  , x2≤x<x33n  , x3≤x<x4…  …n−1n  , xn−1≤x<xn1  , x ≥xnF(x) = P(X ≤ x) = \sum_{x_i ≤ x} f(x_i) = \sum_{x_i≤x} \frac {1}{n} = \begin{cases} 0 \ \ \text{, $x<x_1$} \\ \frac {1}{n} \ \ \text {, $x_1 ≤ x < x_2$} \\ \frac {2}{n} \ \ \text{, $x_2 ≤ x < x_3$} \\ \frac {3}{n} \ \ \text{, $x_3 ≤ x < x_4$} \\ … \ \ … \\ \frac {n-1}{n} \ \ \text {, $x_{n-1} ≤ x < x_n$} \\ 1 \ \ \text{, $x$ $\geq x_n$} \end{cases}F(x)=P(X≤x)=∑xi​≤x​f(xi​)=∑xi​≤x​n1​=⎩⎨⎧​0  , x<x1​n1​  , x1​≤x<x2​n2​  , x2​≤x<x3​n3​  , x3​≤x<x4​…  …nn−1​  , xn−1​≤x<xn​1  , x ≥xn​​﻿

## Teorema

Se a variável aleatória XXX﻿ tem distribuição Uniforme Discreta, X∼U(n)X \sim U_{(n)}X∼U(n)​﻿, então  
μ=E[X]=∑i=1nxif(xi)=∑i=1nxi×1n=1n∑i=1nxi\mu = E[X] = \sum_{i=1}^n x_if(x_i) = \sum_{i=1}^n x_i \times \frac {1}{n} = \frac {1}{n} \sum_{i=1}^n x_iμ=E[X]=∑i=1n​xi​f(xi​)=∑i=1n​xi​×n1​=n1​∑i=1n​xi​﻿  
e  
σ2=V[X]=∑i=1n(xi−μ)2f(xi)=∑i=1n(xi−μ)21n=1n∑i=1n(xi−μ)2=1n∑i=1nxi2−(1n∑i=1nxi)2\sigma^2 = V[X] = \sum_{i=1}^n (x_i - \mu)^2 f(x_i) = \sum_{i=1}^n (x_i - \mu)^2 \frac{1}{n} = \frac {1}{n} \sum_{i=1}^n (x_i - \mu)^2 = \frac {1}{n} \sum_{i=1}^n x_i^2 - (\frac {1}{n} \sum_{i=1}^n x_i)^2σ2=V[X]=∑i=1n​(xi​−μ)2f(xi​)=∑i=1n​(xi​−μ)2n1​=n1​∑i=1n​(xi​−μ)2=n1​∑i=1n​xi2​−(n1​∑i=1n​xi​)2﻿

E[X]=1n∑i=1nxiE[X] = \frac {1}{n} \sum_{i=1}^n x_iE[X]=n1​∑i=1n​xi​﻿ e V[X]=1n∑i=1nxi2−(1n∑i=1nxi)2V[X] = \frac {1}{n} \sum_{i=1}^n x_i^2 - (\frac {1}{n} \sum_{i=1}^n x_i)^2V[X]=n1​∑i=1n​xi2​−(n1​∑i=1n​xi​)2﻿

## Caso Particular

Se a variável aleatória XXX﻿, com distribuição Uniforme Discreta, está definida num conjunto de inteiros consecutivos, DX={a,a+1,a+2,…,b}D_X = \{ a, a+1, a+2, … , b \}DX​={a,a+1,a+2,…,b}﻿, então  
E[X]=a+b2E[X] = \frac {a+b}{2}E[X]=2a+b​﻿ e V[X]=(b−a+1)2−112V[X] = \frac {(b - a + 1)^2 - 1}{12}V[X]=12(b−a+1)2−1​﻿

- Este método (definição clássica de probabilidade) só e possível por estarem a considerar (sem definir) que têm uma variável aleatória XXX﻿ que assume em todos os nnn﻿ pontos do seu domínio a mesma probabilidade, ou seja, uma variável aleatória XXX﻿ com distribuição Uniforme Discreta:  
    X∼U(n)X \sim U_{(n)}X∼U(n)​﻿  
    portanto todos esses exercícios foram feitos usando a distribuição uniforme discreta (só não foi usado este nome por estarem a trabalhar com acontecimentos em vez de variáveis aleatórias).

Exemplo 10

Um sistema de comunicações de uma empresa possui 4 linhas externas. Admita que cada uma das possibilidades, em termos do numero de linhas externas em utilização, tem a mesma probabilidade de ocorrer.

1. Indique e represente graficamente a função de probabilidade da variável aleatória numero de linhas externas em utilização.

Seja XXX﻿ a variável aleatória discreta que representa o número de linhas externas em utilização, definida em DX={0,1,2,3,4}D_X = \{ 0, 1, 2, 3, 4 \}DX​={0,1,2,3,4}﻿.  
O enunciado diz "Admita que cada uma das possibilidades, em termos do número de linhas externas em utilização, tem a mesma probabilidade de ocorrer", então XXX﻿ segue uma distribuição Uniforme Discreta com 5 elementos, ou seja,  
X∼U(5)X \sim U_{(5)}X∼U(5)​﻿  
Agora que identificámos o modelo, e fácil responder a questão:  
XXX﻿ = número de linhas externas em utilização, com DX={0,1,2,3,4}D_X = \{ 0, 1, 2, 3, 4 \}DX​={0,1,2,3,4}﻿  
X∼U(5)X \sim U_{(5)}X∼U(5)​﻿

função de probabilidade:

f(x)=P(X=x)f(x) = P(X=x)f(x)=P(X=x)﻿

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|xxx|0|1|2|3|4|
|f(x)f(x)f(x)|15\frac {1}{5}51​|15\frac {1}{5}51​|15\frac {1}{5}51​|15\frac {1}{5}51​|15\frac {1}{5}51​|

⇔  f(x)={15  x∈DX0  , caso contraˊrio\Harr \ \ f(x)= \begin{cases} \frac {1}{5} \ \ x \in D_X \\ 0 \ \ \text{, caso contrário} \end{cases}⇔  f(x)={51​  x∈DX​0  , caso contraˊrio​﻿

[![](Dashboard/Attachments/Untitled%2019.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled.png)

2. Indique e represente graficamente a função de distribuição da variável aleatória número de linhas externas em utilização.

XXX﻿ = número de linhas externas em utilização, com DX={0,1,2,3,4}D_X = \{ 0, 1, 2, 3, 4 \}DX​={0,1,2,3,4}﻿

X∼U(5)X \sim U_{(5)}X∼U(5)​﻿

Função de distribuição: F(x)=P(X≤x)F(x) = P(X ≤ x)F(x)=P(X≤x)﻿

[![](Dashboard/Attachments/Untitled%201%207.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%201.png)

Observação: Todos os "degraus" do gráfico da função de distribuição de uma distribuição Uniforme Discreta têm sempre a mesma altura. Neste caso 15\frac{1}{5}51​﻿.

3. Qual a probabilidade do número de linhas externas em utilização ser inferior a 3 sabendo que existem linhas externas em utilização?

P(X<3∣X>0)=P(X<3∧X>0)P(X>0)=P(0<X<3)1−P(X≤0)=f(1)+f(2)1−F(0)1−F(0)=15+151−15=12P (X < 3|X > 0) = \frac{P(X < 3 \wedge X > 0)}{P(X > 0)} = \frac{P(0 < X < 3)}{1 - P (X ≤ 0)} = \frac{f(1) + f(2)}{1- F(0)}{1 - F(0)} = \frac{\frac{1}{5} + \frac{1}{5}}{1 - \frac{1}{5}} = \frac{1}{2}P(X<3∣X>0)=P(X>0)P(X<3∧X>0)​=1−P(X≤0)P(0<X<3)​=1−F(0)f(1)+f(2)​1−F(0)=1−51​51​+51​​=21​﻿

4. Qual o número médio de linhas externas em utilização?

XXX﻿ = número de linhas externas em utilização, com DX={0,1,2,3,4}D_X = \{ 0, 1, 2, 3, 4 \}DX​={0,1,2,3,4}﻿

X∼U(5)X \sim U_{(5)}X∼U(5)​﻿

Como DX={0,1,2,3,4}D_X = \{ 0,1,2,3,4 \}DX​={0,1,2,3,4}﻿ são inteiros consecutivos, então podemos recorrer ao caso particular com a=0a=0a=0﻿ e b=4b=4b=4﻿:

Se a variável aleatória X, com distribuição Uniforme Discreta, esta definida num conjunto de ==inteiros consecutivos==,  
DX={a,a+1,a+2,…,b}D_X = \{ a, a + 1, a + 2, … , b \}DX​={a,a+1,a+2,…,b}﻿, então

E[X]=a+b2E[X] = \frac{a + b}{2}E[X]=2a+b​﻿ e V[X]=(b−a+1)2−112V[X] = \frac {(b-a+1)^2 - 1}{12}V[X]=12(b−a+1)2−1​﻿

E[X]=0+42=42=2E[X] = \frac {0+4}{2} = \frac{4}{2} = 2E[X]=20+4​=24​=2﻿ linhas externas

5. Qual o desvio padrão do número de linhas externas em utilização?

XXX﻿ = número de linhas externas em utilização, com DX={0,1,2,3,4}D_X = \{ 0, 1, 2, 3, 4 \}DX​={0,1,2,3,4}﻿

X∼U(5)X \sim U_{(5)}X∼U(5)​﻿

Como DX={0,1,2,3,4}D_X = \{ 0,1,2,3,4 \}DX​={0,1,2,3,4}﻿ são inteiros consecutivos, então podemos recorrer ao caso particular com a=0a=0a=0﻿ e b=4b=4b=4﻿:

Se a variável aleatória X, com distribuição Uniforme Discreta, esta definida num conjunto de ==inteiros consecutivos==,  
DX={a,a+1,a+2,…,b}D_X = \{ a, a + 1, a + 2, … , b \}DX​={a,a+1,a+2,…,b}﻿, então

E[X]=a+b2E[X] = \frac{a + b}{2}E[X]=2a+b​﻿ e V[X]=(b−a+1)2−112V[X] = \frac {(b-a+1)^2 - 1}{12}V[X]=12(b−a+1)2−1​﻿

variância: V[X]=(4−0+1)2−112=2412=2V[X] = \frac{(4-0+1)^2-1}{12} = \frac{24}{12} = 2V[X]=12(4−0+1)2−1​=1224​=2﻿ linhas externas2^22﻿

desvio padrão: V[X]=2=1.414\sqrt{V[X]} = \sqrt{2} = 1.414V[X]​=2​=1.414﻿ linhas externas

Claro que as alíneas anteriores podiam ter sido calculadas com recurso as definições e propriedades que vimos para as Variáveis Aleatórias Discretas.  
X∼U(5)X \sim U_{(5)}X∼U(5)​﻿, com DX={0,1,2,3,4}D_X = \{0, 1, 2, 3, 4 \}DX​={0,1,2,3,4}﻿  
função de probabilidade:

f(x)={15  ,x∈DX0  , caso contraˊriof(x) = \begin{cases} \frac{1}{5} \ \ , x \in D_X \\ 0 \ \ \text{, caso contrário} \end{cases}f(x)={51​  ,x∈DX​0  , caso contraˊrio​﻿

[![](Dashboard/Attachments/Untitled%202%205.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%202.png)﻿Exemplo 11

Seja XXX﻿ uma variável aleatória com distribuição Uniforme Discreta, definida no conjunto DX={3,6,9}D_X = \{ 3,6,9 \}DX​={3,6,9}﻿. Calcule o valor esperado e a variância da variável aleatória XXX﻿.

X∼U(3)X \sim U{(3)}X∼U(3)﻿ , com DX={3,6,9}D_X = \{ 3,6,9 \}DX​={3,6,9}﻿

Neste caso não e possível utilizar o "caso particular" pois DX={3,6,9}D_X = \{ 3, 6, 9 \}DX​={3,6,9}﻿, embora seja formado por inteiros, não são inteiros consecutivos.  
No entanto como e possível escrever:

- 3=3×13 = 3 \times 13=3×1﻿

- 3=3×23 = 3 \times 23=3×2﻿

- 9=3×39 = 3 \times 39=3×3﻿

então e possível considerar que X=3YX = 3YX=3Y﻿ e a variável aleatória YYY﻿ tem um comportamento probabilístico igual à variável XXX﻿, ou seja  
Y∼U(3)Y \sim U_{(3)}Y∼U(3)​﻿

mas DY={1,2,3}D_Y = \{ 1,2,3 \}DY​={1,2,3}﻿.

Y∼U(3)Y \sim U_{(3)}Y∼U(3)​﻿, com DY={1,2,3}D_Y = \{1,2,3 \}DY​={1,2,3}﻿

[![](Dashboard/Attachments/Untitled%203%204.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%203.png)

Claro que podia ter sido calculado por definição e com as propriedades que vimos nas Variáveis Aleatórias Discretas.

[![](Dashboard/Attachments/Untitled%204%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%204.png)

Exemplo 12

Considere uma variável aleatória XXX﻿ que assume a mesma probabilidade em todos os pontos do conjunto {2,5,7,11}\{ 2, 5, 7, 11 \}{2,5,7,11}﻿. Calcule o valor esperado e a variância da variável aleatória XXX﻿.

[![](Dashboard/Attachments/Untitled%205%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%205.png)

[![](Dashboard/Attachments/Untitled%206%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%206.png)

# Distribuição Binomial

## Provas de Bernoulli

É uma experiência aleatória que tem apenas dois resultados possíveis: sucesso ou insucesso.  
O sucesso ocorre com probabilidade ppp﻿ (fixo),  
P(sucesso)=pP(sucesso) = pP(sucesso)=p﻿  
e o insucesso com probabilidade q=1−pq = 1 - pq=1−p﻿,  
P(insucesso)=q=1−pP(insucesso) = q = 1 - pP(insucesso)=q=1−p﻿.

Exemplo 13

Prova de Bernoulli:

- Experiência aleatória: retirar uma carta de um baralho (não viciado) com 52 cartas

- sucesso: sair carta de copas

- insucesso: não sair carta de copas

- O sucesso ocorre com a probabilidade p=1352=0.25p = \frac{13}{52} = 0.25p=5213​=0.25﻿

- o insucesso ocorre com probabilidade q=1−p=1−1352=0.75q=1-p=1- \frac{13}{52}=0.75q=1−p=1−5213​=0.75﻿.

### Experiência Binomial

É uma sucessão de provas de Bernoulli e caracteriza-se por:

- A experiência ser constituída por nnn﻿ provas de Bernoulli, em que uma prova é uma repetição em condições idênticas;

- As provas são independentes;

- Em cada prova pode-se realizar um dos dois acontecimentos possíveis:
    
    Sucesso ou insucesso;
    
    Onde P(sucesso)=pP(sucesso) = pP(sucesso)=p﻿ e P(insucesso)=q=1−pP(insucesso) = q = 1 - pP(insucesso)=q=1−p﻿
    

Exemplo 14

Experiência Binomial: repetir n = 4 vezes a seguinte Prova de Bernoulli:

- Experiência aleatória: retirar uma carta de um baralho (não viciado) com 52 cartas

- sucesso: sair carta de copas

- insucesso: não sair carta de copas

- O sucesso ocorre com probabilidade p=1352=0.25p = \frac {13}{52} = 0.25p=5213​=0.25﻿

- O insucesso com ocorre com probabilidade q=1−p=1−1352=0.75q = 1- p = 1 - \frac{13}{52} = 0.75q=1−p=1−5213​=0.75﻿

## Definição

Diz-se que uma variável aleatória discreta XXX﻿, que representa o número de sucessos em nnn﻿ provas de Bernoulli, tem distribuição Binomial com os parâmetros nnn﻿ e ppp﻿ (fixos)

X∼B(n,p)X \sim B_{(n,p)}X∼B(n,p)​﻿

se a sua função de probabilidade é dada por

F(x)=P(X=x)={nCxpx(1−p)n−x  ,x=0,1,…,n0                            , caso contraˊrioF(x) = P(X=x) = \begin{cases}
{ #nC_xp}
^x(1-p)^{n-x} \ \ , x=0,1,…,n \\ 0 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \text{, caso contrário} \end{cases}F(x)=P(X=x)={nCx​px(1−p)n−x  ,x=0,1,…,n0                            , caso contraˊrio​﻿

e a sua função de distribuição é dada por

F(x)=P(X≤x)=∑xi≤x(nCxipxi(1−p)n−xi)F(x) = P(X≤ x) = \sum_xi≤x (^nC_{xi} p^{xi} (1- p)^{n-x_i})F(x)=P(X≤x)=∑x​i≤x(nCxi​pxi(1−p)n−xi​)﻿

onde 0<p<10 < p < 10<p<1﻿ representa a probabilidade de sucesso numa prova de Bernoulli.

Exemplo 14

Considere a variável a aleatória discreta:  
X=X =X=﻿ número de vezes que sai carta de copas quando se tira 4 cartas do baralho

ou seja,

X=X=X=﻿ número de sucessos em nnn﻿ provas de Bernoulli

Portanto a variável aleatória XXX﻿ tem DX={0,1,2,3,4}D_X = \{ 0,1,2,3,4 \}DX​={0,1,2,3,4}﻿ e tem distribuição Binomial com os parâmetros n=4n=4n=4﻿ e p=0.25p=0.25p=0.25﻿, ou seja

X∼B(4,0.25)X \sim B(4, 0.25)X∼B(4,0.25)﻿

**Observação:** Na distribuição Binomial está subjacente que houve reposição, por isso é que a probabilidade de sucesso é fixa.  
X=X =X=﻿ número de vezes que sai carta de copas quando se tira 4 cartas do baralho

X∼B(4,0.25)X \sim B(4, 0.25)X∼B(4,0.25)﻿

função de probabilidade f(x)=P(X=x)f(x) = P(X=x)f(x)=P(X=x)﻿:

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|xxx|0|1|2|3|4|
|f(x)f(x)f(x)|0.3164|0.4219|0.2109|0.0469|0.00390.00390.0039|

função de distribuição F(x)=P(X≤x)F(x) = P(X≤x)F(x)=P(X≤x)﻿:

F(x)={0     ,x<00.3164 ,0≤x<10.7383 ,1≤x<20.9492 ,2≤x<30.9961 ,3≤x<41     ,x≥4F(x) = \begin{cases} 0 \ \ \ \ \ , x<0 \\ 0.3164 \ ,0≤x<1 \\ 0.7383 \ ,1≤ x<2 \\ 0.9492 \ , 2≤ x <3 \\ 0.9961 \ ,3≤ x<4 \\ 1 \ \ \ \ \ ,x≥4 \end{cases}F(x)=⎩⎨⎧​0     ,x<00.3164 ,0≤x<10.7383 ,1≤x<20.9492 ,2≤x<30.9961 ,3≤x<41     ,x≥4​﻿

[![](Dashboard/Attachments/Untitled%207%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%207.png)

[![](Dashboard/Attachments/Untitled%208%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%208.png)

[![](Dashboard/Attachments/Untitled%209%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%209.png)

[![](Dashboard/Attachments/Untitled%2010%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2010.png)

[![](Dashboard/Attachments/Untitled%2011%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2011.png)

Claro que ainda existe outra forma de fazer os cálculos das probabilidades da Distribuição Binomial:  
4 tabelas com recurso a CALCULADORA  
Este processo não será abordado pois depende da calculadora considerada.

## Teorema

Se a variável aleatória XXX﻿ tem distribuição Binomial com parâmetros nnn﻿ e ppp﻿,

X∼B(n,p)X \sim B(n,p)X∼B(n,p)﻿

então

E[X]=npE[X] = npE[X]=np﻿ e V[X]=npq=np(1−p)V[X] = npq = np(1-p)V[X]=npq=np(1−p)﻿.

## Observação

- Sejam X∼B(n,p)X \sim B(n,p)X∼B(n,p)﻿ o número de sucessos em nnn﻿ provas de Bernoulli e Y∼B(n,1−p)Y \sim B(n, 1-p)Y∼B(n,1−p)﻿ o número de insucessos em n provas de Bernoulli, então
    
    - P(X=k)=P(Y=n−k)P(X=k) = P(Y=n-k)P(X=k)=P(Y=n−k)﻿
    
    - P(X≤k)=1−P(Y≤n−k−1)P(X≤k) = 1-P(Y≤ n - k -1)P(X≤k)=1−P(Y≤n−k−1)﻿, com k<nk <nk<n﻿.

Esta observação é muito útil para utilizar as **tabelas da distribuição Binomial em papel**. As tabelas em papel só têm valores da probabilidade de sucesso ppp﻿ até ao 0.5.

[![](Dashboard/Attachments/Untitled%2012%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2012.png)

Exemplo 14

X=X =X=﻿ número de vezes que ==sai carta de copas== quando se tira 4 cartas do baralho

X∼B(4,0.25)X \sim B(4, 0.25)X∼B(4,0.25)﻿

função de probabilidade f(x)=P(X=x)f(x) = P(X=x)f(x)=P(X=x)﻿:

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|xxx|0|1|2|3|4|
|f(x)f(x)f(x)|0.3164|0.4219|0.2109|0.0469|0.00390.00390.0039|

Y=Y =Y=﻿ número de vezes que ==não sai carta de copas== quando se tira 4 cartas do baralho

Y∼B(4,0.75)Y \sim B(4,0.75)Y∼B(4,0.75)﻿

função de probabilidade fY(y)=P(Y=y)=P(X=n−y)f_Y(y) = P(Y=y) = P(X=n-y)fY​(y)=P(Y=y)=P(X=n−y)﻿:

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|yyy|0|1|2|3|4|
|fY(y)f_Y(y)fY​(y)|0.0039|0.0469|0.2109|0.4219|0.3164|

## Propriedade: Aditividade da Binomial

Sejam X1,X2,...,XkX_1,X_2,...,X_kX1​,X2​,...,Xk​﻿ variáveis aleatórias independentes com distribuição Binomial e com a mesma probabilidade de sucesso, isto é

Xi∼B(ni,p)     i=1,...,k,X_i ∼ B(n_i,p) \ \ \ \ \ i= 1,...,k,Xi​∼B(ni​,p)     i=1,...,k,﻿

então Y=∑i=1kXiY=\sum_{i=1}^k X_iY=∑i=1k​Xi​﻿ também é uma variável aleatória com distribuição Binomial, isto é Y=∑i=1kXi∼B(∑i=1kni,p)Y=\sum_{i=1}^k X_i ∼ B (\sum_{i=1}^k n_i,p)Y=∑i=1k​Xi​∼B(∑i=1k​ni​,p)﻿.

Exemplo 15

Sabe-se que 10% dos testes feitos para detetar uma determinada doença dá falsos negativos quando são efetuados no laboratório A. Considere cinco testes efetuados no laboratório A de forma independente.

1. Calcule a probabilidade de 3 desses testes serem falsos negativos.

X=X=X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A

A variável aleatória discreta XXX﻿ tem DX={0,1,2,3,4,5}D_X= \{ 0,1,2,3,4,5 \}DX​={0,1,2,3,4,5}﻿ e tem distribuição Binomial com os parâmetros n=5n= 5n=5﻿ e p=0.10p= 0.10p=0.10﻿, ou seja

X∼B(5,0.10)X∼B(5,0.10) X∼B(5,0.10)﻿

P(X=3)=f(3)=0.0081P(X= 3) =f(3) = 0.0081P(X=3)=f(3)=0.0081﻿

[![](Dashboard/Attachments/Untitled%2013%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2013.png)

2. Calcule a probabilidade de mais de 2 testes serem falsos negativos.

X=X =X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A

X∼B(5,0.10)X \sim B(5,0.10)X∼B(5,0.10)﻿

P(X>2)=1−P(X≤2)=1−F(2)=1−0.9914=0.0086P(X>2) = 1- P(X≤2) = 1- F(2) = 1 - 0.9914 = 0.0086P(X>2)=1−P(X≤2)=1−F(2)=1−0.9914=0.0086﻿

[![](Dashboard/Attachments/Untitled%2014%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2014.png)

3. Calcule, em média, quantos dos 5 testes espera que sejam falsos negativos.

X=X =X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A

X∼B(5,0.10)X \sim B(5,0.10)X∼B(5,0.10)﻿

E[X]=np=5×0.10=0.5E[X] = np = 5 \times 0.10 = 0.5E[X]=np=5×0.10=0.5﻿ testes

4. Quando os testes são feitos no laboratório B, 85% dos testes não são falsos negativos. Considere 4 testes efetuados de forma independente no laboratório B e calcule a probabilidade de 3 desses testes não serem falsos negativos.

Y=Y = Y=﻿ número de testes que **não são** falsos negativos, num grupo de quatro testes efetuados no laboratório B

Y∼B(4,0.85)Y \sim B(4, 0.85)Y∼B(4,0.85)﻿

P(Y=3)=fY(3)=0.3685P(Y=3) = f_Y(3) = 0.3685P(Y=3)=fY​(3)=0.3685﻿

[![](Dashboard/Attachments/Untitled%2015%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2015.png)

5. Se os testes forem efetuados num laboratório C, apenas 10% dos testes são falsos negativos. Considere 4 testes efetuados de uma forma independente no laboratório C. Calcule a probabilidade de, entre os 9 testes (5 do laboratório A e 4 do laboratório C), serem recebidos entre 4 e 6 testes (inclusive) falsos negativos.

X=X =X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A, X∼B(5,0.10)X \sim B(5, 0.10)X∼B(5,0.10)﻿

V=V =V=﻿ número de testes que são falsos negativos, num grupo de quatro testes efetuados no laboratório C, V∼B(4,0.10)V \sim B(4,0.10)V∼B(4,0.10)﻿

Pretende-se T=X+VT = X + VT=X+V﻿, como XXX﻿ e VVV﻿ podem ser consideradas variáves aleatórias independentes e têm a mesma probabilidade de sucesso, então pela aditividade da distribuição Binomial tem-se

T∼B(9,0.10)T \sim B(9, 0.10)T∼B(9,0.10)﻿

P(4≤T≤6)=0.0083P(4≤ T ≤ 6) = 0.0083P(4≤T≤6)=0.0083﻿

[![](Dashboard/Attachments/Untitled%2016%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2016.png)

[![](Dashboard/Attachments/Untitled%2017%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2017.png)﻿

# Distribuição de Poisson

## Processo de Poisson

Suponha que se procede à contagem do número de ocorrências de um acontecimento num determinado intervalo. Tem-se um processo de Poisson com parâmetro λ>0λ > 0λ>0﻿ quando se verificam as seguintes condições:

- a probabilidade de uma ocorrência do acontecimento é a mesma para quaisquer dois intervalos de igual amplitude (apenas depende da amplitude do intervalo e não da posição em que se situa o intervalo);

- a ocorrência ou não ocorrência do acontecimento num determinado intervalo é independente da ocorrência ou não ocorrência do acontecimento num outro qualquer intervalo (não sobreposto);

- a probabilidade de ocorrer um acontecimento em qualquer intervalo de amplitude ∆t∆t∆t﻿ (arbitrariamente pequeno) é proporcional à dimensão do intervalo: λ∆tλ∆tλ∆t﻿;

- a probabilidade de ocorrerem dois ou mais acontecimentos em qualquer intervalo de amplitude muito pequena é negligenciável, quando comparada com a probabilidade de se verificar apenas uma ocorrência.

## Definição

Diz-se que uma variável aleatória discreta XXX﻿, que representa o número de ocorrências por unidade de medida, tem **distribuição de Poisson** com o parâmetro λλλ﻿ (fixo)

X∼P(λ)X ∼ P (λ)X∼P(λ)﻿

se a sua função de probabilidade é dada por

f(x)=P(X=x)=e−λλxx!   ,x=0,1,2,...,λ>0f(x) = P (X = x) = \frac {e^{−λ}λ^x}{x!} \ \ \ , x = 0, 1, 2, . . . , λ > 0f(x)=P(X=x)=x!e−λλx​   ,x=0,1,2,...,λ>0﻿

e a sua função de distribuição é dada por

F(x)=P(X≤x)=∑xi≤xe−λλixxi!F (x) = P (X ≤ x) = \sum_{x_i≤x} \frac{e^{−λ}λ^x_i}{x_i!}F(x)=P(X≤x)=∑xi​≤x​xi​!e−λλix​​﻿

onde λλ λ﻿ representa a intensidade da distribuição.

Exemplo 16

Suponha que a variável aleatória discreta XXX﻿, que representa o número de defeitos (por metro quadrado) na superfície de painéis de plástico usados no interior de uma máquina, segue uma distribuião de Poisson de parâmetro igual a 0.2.  
Considere a variável a aleatória discreta:  
X=X =X=﻿ número de defeitos, por metro quadrado, na superfície de painéis de plástico  
ou seja,

X=X =X=﻿ número de ocorrências por unidade de medida

Portanto a variável aleatória XXX﻿ tem DX={0,1,2,...}D_X = \{0, 1, 2, . . . \}DX​={0,1,2,...}﻿ e tem distribuição Poisson com o parâmetro λ=0.2λ = 0.2λ=0.2﻿, ou seja

X∼P(0.2)X ∼ P (0.2)X∼P(0.2)﻿

**Observação:** Na distribuição Binomial também é efetuada uma contagem de ocorrências (a que se chama de sucessos) mas o domínio é finito, enquanto na distribuição Poisson é infinito (embora numerável).

X=X=X=﻿ número de defeitos, por metro quadrado, na superfície de painéis de plástico

X∼P(0.2)X \sim P(0.2)X∼P(0.2)﻿

função de probabilidade f(x)=P(X=x)f(x) = P(X=x)f(x)=P(X=x)﻿:

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|xxx|0|1|2|3|…|
|f(x)f(x)f(x)|0.8187|0.1637|0.0164|0.0011|…|

função de distribuição F(x) = P(X≤<):

F(x)={0          ,x<00.8187 ,0≤x<10.9825 ,1≤x<20.9989 ,2≤x<30.9999 ,3≤x<4...         ,...F(x) = \begin{cases} 0 \ \ \ \ \ \ \ \ \ \ , x<0 \\ 0.8187 \ , 0≤ x<1 \\ 0.9825 \ , 1≤x<2 \\ 0.9989 \ , 2≤x<3 \\ 0.9999 \ ,3≤ x<4 \\ ... \ \ \ \ \ \ \ \ \ , ... \end{cases}F(x)=⎩⎨⎧​0          ,x<00.8187 ,0≤x<10.9825 ,1≤x<20.9989 ,2≤x<30.9999 ,3≤x<4...         ,...​﻿

[![](Dashboard/Attachments/Untitled%2018%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2018.png)

[![](Dashboard/Attachments/Untitled%2019%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2019.png)

[![](Dashboard/Attachments/Untitled%2020.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2020.png)

[![](Dashboard/Attachments/Untitled%2021.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2021.png)﻿

## Teorema

Se a variável aleatória XXX﻿ tem distribuição de Poisson com parâmetro λλλ﻿,

X∼P(λ)X \sim P(λ)X∼P(λ)﻿

então

E[X]=λE[X] = λE[X]=λ﻿ e V[X]=λV[X] = λV[X]=λ﻿

## Propriedade: Aditividade da Poisson

Sejam X1,X2,...,XkX_1, X_2, . . . , X_kX1​,X2​,...,Xk​﻿ variáveis aleatórias independentes com distribuição de Poisson, isto é

Xi∼P(λi)   i=1,...,k,X_i ∼ P (λ_i) \ \ \ i = 1, . . . , k,Xi​∼P(λi​)   i=1,...,k,﻿

então

Y=∑i=1kXiY = \sum_{i=1}^k X_iY=∑i=1k​Xi​﻿

também é uma variável aleatória com distribuição de Poisson, isto é  
Y=∑i=1kXi∼P(∑i=1kλi)Y = \sum_{i=1}^k X_i ∼ P(\sum_{i=1}^k λ_i)Y=∑i=1k​Xi​∼P(∑i=1k​λi​)﻿.

Exemplo 17

A Central que gere os pedidos de ambulância de uma determinada região reencaminha esses pedidos para dois postos de socorro: AAA﻿ e BBB﻿. Os pedidos serão reencaminhados para o posto de socorro AAA﻿ se os pedidos se dirigirem à zona norte  
da região, caso contrário serão reencaminhados para o posto de socorro BBB﻿. Sabe-se que o número de pedidos de ambulância reencaminhados, por dia, para o posto de socorro A segue uma distribuição de Poisson de parâmetro 2 e o número de pedidos de ambulância reencaminhados, por dia, para o posto de socorro BBB﻿ segue uma distribuição de Poisson com média 3.

1. Em relação ao posto de socorro AAA﻿, calcule a probabilidade de que num dia, haja 3 pedidos de ambulância.

X=X= X=﻿ número de pedidos de ambulância, por dia, reencaminhados para o posto de socorro AAA﻿

A variável aleatória discreta XXX﻿ tem DX={0,1,2,3,…}D_X = \{ 0,1,2,3,… \}DX​={0,1,2,3,…}﻿ e tem distribuição Poisson com parâmetro λ=2\lambda = 2λ=2﻿, ou seja

X∼P(2)X \sim P(2)X∼P(2)﻿

P(X=3)=f(3)=0.1804P(X=3) = f(3) = 0.1804P(X=3)=f(3)=0.1804﻿

[![](Dashboard/Attachments/Untitled%2022.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2022.png)

2. Em relação ao posto de socorro A, calcule a probabilidade de que haja pelo menos 4 pedidos de ambulância.

X=X =X=﻿ número de pedidos de ambulância, por dia, reencaminhados para o posto de socorro AAA﻿

X∼P(2)X \sim P(2)X∼P(2)﻿

P(X≥4)=1−P(X<4)=1−P(X≤3)=1−F(3)=1−0.8571=0.1429P(X≥4) = 1 - P(X<4) = 1 - P(X≤3) = 1 - F(3) = 1 - 0.8571 = 0.1429P(X≥4)=1−P(X<4)=1−P(X≤3)=1−F(3)=1−0.8571=0.1429﻿

[![](Dashboard/Attachments/Untitled%2023.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2023.png)

3. Em relação ao posto de socorro AAA﻿, calcule a probabilidadede que num dia, haja 3 pedidos de ambulância e no dia seguinte também se verifiquem 3 pedidos de ambulância.

Sabemos

X=X =X=﻿ número de pedidos de ambulância, ==num dia==, reencaminhados para o posto de socorro A, X∼P(2)X \sim P(2)X∼P(2)﻿

agora pretende-se:

Y=Y=Y=﻿ número de pedidos de ambulância, ==no dia seguinte== reencaminhados para o posto de socorro A, Y∼P(2)Y \sim P(2)Y∼P(2)﻿

P(X=3∧Y=3)=P(X=3)×P(Y=3)=f83)×f(3)=0.18042=0.0325P(X=3 \wedge Y =3) = P(X=3) \times P(Y=3) = f83) \times f(3) = 0.1804^2 = 0.0325P(X=3∧Y=3)=P(X=3)×P(Y=3)=f83)×f(3)=0.18042=0.0325﻿

Recorrendo às condições de um Processo de Poisson, sabe-se:

💢

A probabilidade de uma ocorrência do acontecimento é a mesma que quaisquer dois intervalos de igual amplitude (apenas depende da amplitude do intervalo e não da posição em que se situa o intervalo).

*️⃣

A ocorrência ou não ocorrência do acontecimento num determinado intervalo é **independente** da ocorrência ou não ocorrência do acontecimento num outro qualquer intervalo (não sobreposto).

4. Em relação ao posto de socorro AAA﻿, calcule a probabilidade de que em 2 dias, sejam pedidas 6 ambulâncias.

Sabemos

X=X =X=﻿ número de pedidos, **num dia**, reencaminhados para o posto de socorro AAA﻿, X∼P(2)X \sim P(2)X∼P(2)﻿

Agora pretende-se:

W=W =W=﻿ número de pedidos de ambulância, ==**em 2 dias**==, reencaminhados para o posto de socorro AAA﻿

W∼P(4)W \sim P(4)W∼P(4)﻿

P(W=6)=fQ(6)=0.1042P(W = 6) = f_Q(6) = 0.1042P(W=6)=fQ​(6)=0.1042﻿

Recorrendo às condições de um Processo de Poisson, sabe-se:

*️⃣

A probabilidade de ocorrer um acontecimento em qualquer intervalo de amplitude Δt\Delta tΔt﻿ (arbitrariamente pequeno) é proporcional à dimensão do intervalo: λΔt\lambda \Delta tλΔt﻿.

Esta condição indica que basta recorrer à regra de três simples para atualizar o parâmetro:

|   |   |
|---|---|
|unidade de medida|parâmetro da Poisson|
|1 dia →|λ=2\lambda = 2λ=2|
|2 dias →|?|

logo λW=4\lambda_W = 4λW​=4﻿

Outra possibilidade de resolução é:  
W=W =W=﻿ número de pedidos de ambulância, em 2 dias, reencaminhados para o posto de socorro AAA﻿  
Ja tínhamos definido:  
X=X = X=﻿ número de pedidos de ambulância, num dia, reencaminhados para o posto de socorro AAA﻿, X∼P(2)X \sim P (2)X∼P(2)﻿  
Y=Y =Y=﻿ número de pedidos de ambulância, no dia seguinte, reencaminhados para o posto de socorro AAA﻿, Y∼P(2)Y \sim P (2)Y∼P(2)﻿  
Portanto

W=X+YW = X + YW=X+Y﻿

como XXX﻿ e YYY﻿ são variaveis aleatorias independentes, então pela **aditividade da distribuição de Poisson** tem-se

W∼P(4)W \sim P (4)W∼P(4)﻿

pois λW=λX+λY=2+2=4\lambda_W = \lambda_X + \lambda_Y = 2 + 2 = 4λW​=λX​+λY​=2+2=4﻿

P(W=6)=fW(6)=0.1042P(W = 6) = f_W(6) = 0.1042P(W=6)=fW​(6)=0.1042﻿

[![](Dashboard/Attachments/Untitled%2024.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2024.png)

5. Em relação ao posto de socorro AAA﻿, calcule a probabilidade de que em 12 horas (metade de um dia), sejam pedidas mais de 2 ambulâncias.

Sabemos

X=X= X=﻿ número de pedidos de ambulância, por dia, reencaminhados para o posto de socorro AAA﻿, X∼P(2)X \sim P(2)X∼P(2)﻿

V=V= V=﻿ número de pedidos de ambulância, ==em 12 horas==, reencaminhados para o posto de socorro AAA﻿

V∼P(1)V \sim P(1)V∼P(1)﻿

P(V>2)=1−P(V≤2)=1−FV(2)=1−0.9197=0.0803P(V > 2) = 1- P(V≤2) = 1-F_V(2) = 1-0.9197 = 0.0803P(V>2)=1−P(V≤2)=1−FV​(2)=1−0.9197=0.0803﻿

Recorrendo às condições de um Processo de Poisson, sabe-se:

*️⃣

A probabilidade de ocorrer um acontecimento em qualquer intervalo de amplitude Δt\Delta tΔt﻿ (arbitrariamente pequeno) é proporcional à dimensão do intervalo: λΔt\lambda \Delta tλΔt﻿.

Esta condição indica que basta recorrer à regra de três simples para atualizar o parâmetro:

|   |   |
|---|---|
|unidade de medida|parâmetro da Poisson|
|1 dia = 24 horas →|λ=2\lambda = 2λ=2|
|12 horas →|?|

logo λV=1\lambda_V = 1λV​=1﻿

[![](Dashboard/Attachments/Untitled%2025.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2025.png)

6. Em relação à Central, calcule a probabilidade de que, num dia, haja no mínimo 7 pedidos de ambulância na Central.

X=X=X=﻿ número de pedidos de ambulância, num dia, reencaminhados para o posto de socorro AAA﻿, X∼P(2)X \sim P(2)X∼P(2)﻿

S=S=S=﻿ número de pedidos de ambulância, num dia, reencaminhados para o posto de socorro BBB﻿, S∼P(3)S \sim P(3) S∼P(3)﻿pois E[S]=λ=3E[S] = \lambda = 3E[S]=λ=3﻿

T=X+S=T= X+S =T=X+S=﻿ número de pedidos de ambulância, num dia na Central

como XXX﻿ e SSS﻿ podem ser consideradas variáveis aleatórias independentes, então pela **aditividade da distribuição de Poisson** tem-se

T∼P(5)T \sim P(5)T∼P(5)﻿

pois λT=λX+λ>S=2+3=5\lambda_T = \lambda_X + \lambda>S = 2 + 3 = 5λT​=λX​+λ>S=2+3=5﻿

P(T≥7)=1−P(T<7)=1−P(T≤6)=1−FT(6)=1−0.7622=0.2378P(T≥7)=1-P(T<7)=1-P(T≤6)=1-F_T(6)=1-0.7622=0.2378P(T≥7)=1−P(T<7)=1−P(T≤6)=1−FT​(6)=1−0.7622=0.2378﻿

[![](Dashboard/Attachments/Untitled%2026.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2026.png)﻿

## Teorema

A distribuição Binomial, B(n,p)B(n,p)B(n,p)﻿, converge para a distribuição de Poisson, P(λ)P(\lambda)P(λ)﻿, quando n→+∞n → +\inftyn→+∞﻿ (o número de provas é muito grande), p→0p → 0p→0﻿ (a probabilidade de sucesso é muito pequena) e o produto (np)(np)(np)﻿ mantém-se aproximadamente constante, np=λ>0np= \lambda > 0np=λ>0﻿ (o número médio de sucessos mantém-se aproximadamente constante ao longo das provas).

X∼B(n,p)→n→+∞  e  p→0X∼P(np=λ)X \sim B(n,p) →_{n→+\infty \ \ \text{e } \ p→ 0} X \sim P(np_{=\lambda})X∼B(n,p)→n→+∞  e  p→0​X∼P(np=λ​)﻿

### Observação

Na prática a distribuição de Poisson é uma boa aproximação da distribuição Binomial se n≥30n ≥ 30n≥30﻿ e np≤5np ≤5np≤5﻿ (ou nq≤5nq ≤5nq≤5﻿).

---

![](Dashboard/Attachments/icons_questions%2014.png)

The **Sentence Method** is a simplified way to record notes on the fly. You should revisit your note after it is complete to restructure the information for easier reviewing later.