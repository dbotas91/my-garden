---
{"tags":["elearning"],"dg-publish":true,"dg-note-icon":"lackluster","noteIcon":"lackluster","permalink":"/04-resources-material-para-zettel/elearning/6-distribuicoes-teoricas-continuas/","dgPassFrontmatter":true,"created":"2026-02-03T09:43:48.184+00:00","updated":"2026-02-03T09:43:48.184+00:00","dg-note-properties":{"tags":["elearning"],"noteIcon":"lackluster"}}
---


![](Dashboard/Attachments/icons_notes--sentence%2020.png)

# 6. Distribuições Teóricas Contínuas

|   |   |
|---|---|
|![](Dashboard/Attachments/arrow-northeast_gray%201191.svg)Subject|[![](Dashboard/Attachments/icons_graduate%2020.png)4. Distribuições Teóricas](../Subjects/4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%209a10eaba10f74467ae7119be5e92ac2f.html)|
|![](Dashboard/Attachments/calendar_gray%201253.svg)Date Created|@June 16, 2022|
|![](Dashboard/Attachments/checkmark-square_gray%20672.svg)To Review?||
|![](Dashboard/Attachments/formula_gray%20491.svg)Review Due||
|![](Dashboard/Attachments/clock_gray%20123.svg)Last Edited|@June 29, 2022 11:15 AM|

[Distribuição Exponencial](#66ce0dcb-8789-415a-8add-5536c55ce5c1)

[Definição](#5e1da7db-218f-4037-8d04-de5c6e167f28)

[Teorema](#14b41f01-8c2d-4b8f-9a2b-8299a8d4fb7d)

[Propriedade: “Falta de Memória”](#20a904c3-d738-448c-b73e-42cbb9e836a3)

[Exemplo 20](#ede851a3-3195-4dec-889c-4df64786c38c)

[Relação entre a Distribuição Exponencial e a Distribuição de Poisson](#56c12f14-0286-4934-a4bd-4aac98d367c1)

[Exemplo 21](#2e90407c-8021-4eca-b4be-e9abffd6dd29)

[Exemplo 22](#0309bc63-377f-4d98-b1fe-3ffcf3065b1e)

[Distribuição Binomial](#0118be0e-c5b3-47fb-97eb-54cda1bc9963)

[Provas de Bernoulli](#a357d23f-0029-4dd2-b65c-656d321bbc23)

[Exemplo 13](#92af9b9e-9d0e-4265-a8ed-64400011f7d7)

[Experiência Binomial](#7fb2dca2-5c53-4f88-8dc4-fe180ca1b15b)

[Exemplo 14](#f56e8876-da1f-4695-b828-c46c6c420a8e)

[Definição](#040c0be0-4ba8-460a-9528-a2e24b611baf)

[Exemplo 14](#91767461-67b8-4cf9-9b5c-2d4c9c8d1802)

[Teorema](#15d02519-0b08-455c-8c18-47abe5df7de1)

[Observação](#f787dea8-ddfd-4d74-ba90-5f13e201e562)

[Exemplo 14](#f59c364b-5629-4de3-b4dd-baf9f06ae873)

[Propriedade: Aditividade da Binomial](#1b499a95-a384-46dd-800c-cccc66fc5119)

[Exemplo 15](#9cd7be4e-d118-4e8a-985e-860076a2c2a9)

[Distribuição de Poisson](#c16fe4b7-1bf3-4f5f-8af3-e1810c263d61)

[Processo de Poisson](#ac7c1de2-3d85-4d7f-8e46-648570b5f608)

[Definição](#5dfbb5ac-d6e1-45f0-a9d4-96020a7ae783)

[Exemplo 16](#46d4aadd-029f-4c28-9b21-0d90e21789b2)

[Teorema](#556cd56d-93fc-4f82-baeb-a0295cceea5b)

[Propriedade: Aditividade da Poisson](#ae4feab4-8667-4d86-afb6-67663341f455)

[Exemplo 17](#bdf1f039-5436-492e-9c17-587e259ac6f9)

[Teorema](#ad2dd2f8-3e38-420e-8495-1dd661ff6be8)

[Observação](#451caf07-b114-436a-9080-d920a7350188)

Vamos analisar pormenorizadamente três modelos probabilísticos ou, como é usual dizer, três Distribuições Teóricas Discretas:

- Distribuição Uniforme Discreta;

- Distribuição Binomial;

- Distribuição de Poisson.

# Distribuição Exponencial

## Definição

Diz-se que uma variável aleatória discreta XXX﻿ tem **distribuição Exponencial** com o parâmetro θ\thetaθ﻿ (fixo),  
X∼Exp(θ)X \sim Exp(\theta)X∼Exp(θ)﻿

se a sua função densidade de probabilidade é dada por f(x)={0        ,x<01θe−xθ ,x≥0f(x) = \begin{cases} 0 \ \ \ \ \ \ \ \ , x<0 \\ \frac{1}{\theta} e^{-\frac{x}{\theta}} \ , x≥0\end{cases} f(x)={0        ,x<0θ1​e−θx​ ,x≥0​﻿ ,θ>0, \theta >0,θ>0﻿

e a sua função de distribuição é dada por

F(x)=P(X≤x)={0  , x<x11−e−xθ  , x ≥xnF(x) = P(X ≤ x) = \begin{cases} 0 \ \ \text{, $x<x_1$}\\ 1-e^{-\frac{x}{\theta}} \ \ \text{, x $\geq x_n$} \end{cases}F(x)=P(X≤x)={0  , x<x1​1−e−θx​  , x ≥xn​​﻿ ,θ>0, \theta > 0,θ>0﻿

Habitualmente diz-se apenas que a variável aleatória XXX﻿ tem Distribuição Exponencial de parâmetro θθθ﻿, X∼Exp(θ)X ∼ Exp(θ)X∼Exp(θ)﻿, mas é necessário ter em atenção que é **Distribuição Exponencial Negativa**, pois a sua função densidade de probabilidade é escrita à custa da função exponencial mas com expoente negativo:

f(x)={0        ,x<01θe−xθ ,x≥0f(x) = \begin{cases} 0 \ \ \ \ \ \ \ \ , x<0 \\ \frac{1}{\theta} e^{-\frac{x}{\theta}} \ , x≥0\end{cases} f(x)={0        ,x<0θ1​e−θx​ ,x≥0​﻿ ,θ>0, \theta >0,θ>0﻿

[![](Dashboard/Attachments/1441C83D-CD60-4450-8404-2675D353EE37.jpeg)](6%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Cont%C3%ADnuas/1441C83D-CD60-4450-8404-2675D353EE37.jpeg)

A função de distribuição de uma variável aleatória contínua X∼Exp(θ)X ∼ Exp(θ)X∼Exp(θ)﻿, não tem o aspeto usual: o último ramo ser igual a 1.

F(x)=P(X≤x)={0  , x<x11−e−xθ  , x ≥xnF(x) = P(X ≤ x) = \begin{cases} 0 \ \ \text{, $x<x_1$}\\ 1-e^{-\frac{x}{\theta}} \ \ \text{, x $\geq x_n$} \end{cases}F(x)=P(X≤x)={0  , x<x1​1−e−θx​  , x ≥xn​​﻿ ,θ>0, \theta > 0,θ>0﻿

[![](Dashboard/Attachments/4D6E5F7A-D57B-4F6A-9BBE-92B63367F602.jpeg)](6%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Cont%C3%ADnuas/4D6E5F7A-D57B-4F6A-9BBE-92B63367F602.jpeg)

Isso deve-se o facto do domínio (intervalo onde existe probabilidade diferente de zero) ser DX=[0,+∞[D_X = [0, +∞[DX​=[0,+∞[﻿, se calcularmos  
lim⁡x→+∞F(x)=lim⁡x→+∞(1−e−xθ)=1−0=1\lim_{x → +\infty} F(x)= \lim_{x → +\infty} (1−e^{−\frac{x}{θ}} )=1−0=1 limx→+∞​F(x)=limx→+∞​(1−e−θx​)=1−0=1﻿  
podemos ver que no ”valor máximo” do domínio a função de distribuição é 1.

## Teorema

Se a variável aleatória XXX﻿ tem distribuição Uniforme Exponencial com parâmetro θ\thetaθ﻿, X∼Exp(θ)X \sim Exp(\theta)X∼Exp(θ)﻿,

então  
E[X]=θE[X] = \thetaE[X]=θ﻿  
e  
V[X]=θ2V[X] = \theta^2V[X]=θ2﻿

## Propriedade: “Falta de Memória”

Seja X∼Exp(θ)X \sim Exp(\theta)X∼Exp(θ)﻿, então

P(X≥a+b∣X≥a)=P(X≥b),     a,b>0P(X≥a+b | X≥a)=P(X≥b),\ \ \ \ \ a,b>0P(X≥a+b∣X≥a)=P(X≥b),     a,b>0﻿.

Exemplo 20

O tempo de vida, em horas, de um certo tipo de componente eletrónico tem distribuição exponencial de parâmetro 100.

1. Qual o tempo de vida médio de um destes componentes?

Considere a variável aleatória contínua:

X=X =X=﻿ tempo de vida, em horas, de certo componente eletrónico

com

X∼Exp(100)X \sim Exp(100)X∼Exp(100)﻿

pois θ=100\theta = 100θ=100﻿.

Portanto

E[X]=θ=100 horasE[X]=\theta = 100\ \text{horas}E[X]=θ=100 horas﻿

2. Qual o desvio padrão do tempo de vida desses componentes?

X=X=X=﻿ tempo de vida, em horas, de certo componente eletrónico

X∼Exp(100)X \sim Exp(100)X∼Exp(100)﻿

Portanto σ2=V[X]=θ2=1002=10000\sigma^2 = V[X] = \theta^2 = 100^2=10000σ2=V[X]=θ2=1002=10000﻿ Horas2^22﻿

σ=V[X]=θ=100\sigma = \sqrt{V[X]} = \theta = 100σ=V[X]​=θ=100﻿ horas.

3. Qual a probabilidade de um destes componentes funcionar, sem falhas, pelo menos 200 horas?

Considere a variável aleatória contínua:

X=X=X=﻿ tempo de vida, em horas, de certo componente eletrónico

X∼Exp(100)X\sim Exp(100)X∼Exp(100)﻿

Portanto

F(x)=P(X≤x)={0               ,x<01−e−x100 ,x≥0F(x) = P(X≤x) = \begin{cases} 0 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ , x<0 \\ 1-e^{-\frac{x}{100}} \ ,x≥0 \end{cases}F(x)=P(X≤x)={0               ,x<01−e−100x​ ,x≥0​﻿

Pretende-se

P(X≥200)=1−P(X<200)=v.a. Contıˊnua1−F(200)=1−0.8647=0.1353P(X≥200) = 1- P(X<200) =_{\text{v.a. Contínua}} 1-F(200) = 1- 0.8647 = 0.1353P(X≥200)=1−P(X<200)=v.a. Contıˊnua​1−F(200)=1−0.8647=0.1353﻿

[![](Dashboard/Attachments/B52ECF2B-775F-487A-AAFA-DA2A3606A07C.jpeg)](6%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Cont%C3%ADnuas/B52ECF2B-775F-487A-AAFA-DA2A3606A07C.jpeg)

4. Qual a probabilidade de um destes componentes funcionar, sem falhas, pelo menos 500 horas sabendo que já está a funcionar há pelo menos 300 horas?

Considere a variável aleatória contínua:

X=X=X=﻿ tempo de vida, em horas, de certo componente eletrónico

X∼Exp(100)X \sim Exp(100)X∼Exp(100)﻿

Portanto

F(x)=P(X≤x)={0               ,x<01−e−x100 ,x≥0F(x) = P(X≤x) = \begin{cases} 0 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ , x<0 \\ 1-e^{-\frac{x}{100}} \ ,x≥0 \end{cases}F(x)=P(X≤x)={0               ,x<01−e−100x​ ,x≥0​﻿

Logo

P(X≥500∣X≥300)=(∗)P(X≥500−300)=P(X≥200)=0.1353P(X ≥ 500 | X≥300) =_{(*)} P(X≥500-300)=P(X≥200) = 0.1353P(X≥500∣X≥300)=(∗)​P(X≥500−300)=P(X≥200)=0.1353﻿

(∗)(*)(∗)﻿ Propriedade “Falta de memória” da distribuição Exponencial.

Claro que era possível calcular a probabilidade recorrendo à definição de probabilidade condicional:

P(X≥500∣X≥300)=P(X≥500∧X≥300)P(X≥300)=P(X≥500)P(X≥300)=1−P(X<500)1−P(X<300)=v.a. Contıˊnua1−F(500)1−F(300)=1−(1−e−500100)1−(1−e−300100)=0.1353P(X≥500|X≥300) = \frac{P(X≥500 \wedge X≥300)}{P(X≥300)}=\frac{P(X≥500)}{P(X≥300)}=\frac{1-P(X<500)}{1-P(X<300)} =_{\text{v.a. Contínua}}\frac{1-F(500)}{1-F(300)}=\frac{1-(1-e^{-\frac{500}{100}})}{1-(1-e^{-\frac{300}{100}})}=0.1353P(X≥500∣X≥300)=P(X≥300)P(X≥500∧X≥300)​=P(X≥300)P(X≥500)​=1−P(X<300)1−P(X<500)​=v.a. Contıˊnua​1−F(300)1−F(500)​=1−(1−e−100300​)1−(1−e−100500​)​=0.1353﻿

Recorrendo ao R:

F(300)=pexp(300,1100)=0.9502F(300) = pexp(300, \frac{1}{100}) = 0.9502F(300)=pexp(300,1001​)=0.9502﻿

F(500)=pexp(500,1100)=0.9933F(500) = pexp(500, \frac{1}{100})=0.9933F(500)=pexp(500,1001​)=0.9933﻿

## Relação entre a Distribuição Exponencial e a Distribuição de Poisson

Se

X∼P(λ)X \sim P(\lambda)X∼P(λ)﻿

X−X -X−﻿ número de ocorrências num intervalo de tempo ttt﻿

λ=\lambda =λ=﻿ número médio de ocorrências num intervalo de tempo ttt﻿

e

Y∼Exp(θ)Y \sim Exp(\theta)Y∼Exp(θ)﻿

Y−Y -Y−﻿ tempo de espera entre ocorrências sucessivas

θ=\theta=θ=﻿ tempo de espera médio entre ocorrências sucessivas,

Então

θ=tλ⇔λ=tθ\theta = \frac{t}{\lambda} \Harr \lambda = \frac{t}{\theta}θ=λt​⇔λ=θt​﻿

[![](Dashboard/Attachments/6DD85F79-3BD4-4AF8-A91B-996F89BEA132.jpeg)](6%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Cont%C3%ADnuas/6DD85F79-3BD4-4AF8-A91B-996F89BEA132.jpeg)

Exemplo 21

Uma máquina que funciona em contínuo tem, em média, 2 avarias por cada turno de 8 horas e o número de avarias segue uma distribuição de Poisson. Determine a probabilidade de que o tempo de avarias consecutivas na máquina seja superior a 5 horas.

X=X =X=﻿ número de avarias por cada turno de 8 horas, com X∼P(2)X ∼ P (2)X∼P(2)﻿ pois E[X]=λ=2E[X] = λ = 2E[X]=λ=2﻿ avarias/turno.  
Y=Y =Y=﻿ tempo, em horas, entre avarias consecutivas na máquina, com Y∼Exp(4)Y ∼ Exp (4)Y∼Exp(4)﻿ pois, recorrendo à relação entre as distribuições Poisson e Exponencial, tem-se  
θ=λt=82=4θ = \frac{λ}{t} = \frac{8}{2} = 4θ=tλ​=28​=4﻿ horas/avaria. Como

F(y)=P(Y≤Y)={0               ,Y<01−e−y4 ,y≥0F(y) = P(Y≤Y) = \begin{cases} 0 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ , Y<0 \\ 1-e^{-\frac{y}{4}} \ ,y≥0 \end{cases}F(y)=P(Y≤Y)={0               ,Y<01−e−4y​ ,y≥0​﻿

Tem-se

P(Y>5)=1−P(Y≤5)=1−FY(5)=1−(1−e−54)=0.2865P(Y>5) = 1 -P(Y≤5) = 1-F_Y(5) = 1 - (1-e^{-\frac{5}{4}})=0.2865P(Y>5)=1−P(Y≤5)=1−FY​(5)=1−(1−e−45​)=0.2865﻿Exemplo 22

O tempo, em minutos, entre a chegada de utentes a um centro de saúde é uma variável aleatória Exponencial com média 90 segundos. Qual a probabilidade de chegarem pelo menos 3 utentes em 6 minutos?

Y=Y =Y=﻿ tempo, em minutos, entre a chegada de utentes, com Y∼Exp(1.5)Y ∼ Exp(1.5)Y∼Exp(1.5)﻿ pois E[Y]=θ=9060=1.5E[Y] = \theta = \frac{90}{60} = 1.5E[Y]=θ=6090​=1.5﻿ minutos/chegada.  
X=X =X=﻿ número de utentes que chegam em 6 minutos, com X∼P(4)X ∼ P(4)X∼P(4)﻿ pois, recorrendo à relação entre as distribuições Poisson e Exponencial, tem-se  
λ=tθ=61.5=4\lambda = \frac{t}{\theta} = \frac{6}{1.5} = 4λ=θt​=1.56​=4﻿ chegadas/períodos de 6 minutos. Tem-se

P(X>=3)=1−P(X<3)=1−P(X≤2)=1−FX(2)=1−0.2381=0.7619P(X>=3) = 1-P(X<3) = 1-P(X\leq 2)=1-F_X(2)=1-0.2381 = 0.7619P(X>=3)=1−P(X<3)=1−P(X≤2)=1−FX​(2)=1−0.2381=0.7619﻿

[![](Dashboard/Attachments/Untitled%2028.png)](6%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Cont%C3%ADnuas/Untitled.png)﻿

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

[![](Dashboard/Attachments/Untitled%207%205.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%207.png)

[![](Dashboard/Attachments/Untitled%208%204.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%208.png)

[![](Dashboard/Attachments/Untitled%209%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%209.png)

[![](Dashboard/Attachments/Untitled%2010%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2010.png)

[![](Dashboard/Attachments/Untitled%2011%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2011.png)

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

Esta observação ́é muito ́útil para utilizar as **tabelas da distribuição Binomial em papel**. As tabelas em papel só têm valores da probabilidade de sucesso ppp﻿ até ao 0.5.

[![](Dashboard/Attachments/Untitled%2012%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2012.png)

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

Sejam X_1,X_2,...,X_k variáveis aleatórias independentes com distribuição Binomial e com a mesma probabilidade de sucesso, isto é

Xi∼B(ni,p)     i=1,...,k,X_i ∼ B(n_i,p) \ \ \ \ \ i= 1,...,k,Xi​∼B(ni​,p)     i=1,...,k,﻿

então Y=∑i=1kXiY=\sum_{i=1}^k X_iY=∑i=1k​Xi​﻿ também é uma variável aleatória com distribuição Binomial, isto é Y=∑i=1kXi∼B(∑i=1kni,p)Y=\sum_{i=1}^k X_i ∼ B (\sum_{i=1}^k n_i,p)Y=∑i=1k​Xi​∼B(∑i=1k​ni​,p)﻿.

Exemplo 15

Sabe-se que 10% dos testes feitos para detetar uma determinada doença dá falsos negativos quando são efetuados no laboratório A. Considere cinco testes efetuados no laboratório A de forma independente.

1. Calcule a probabilidade de 3 desses testes serem falsos negativos.

X=X=X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A

A variável aleatória discreta XXX﻿ tem DX={0,1,2,3,4,5}D_X= \{ 0,1,2,3,4,5 \}DX​={0,1,2,3,4,5}﻿ e tem distribuição Binomial com os parâmetros n=5n= 5n=5﻿ e p=0.10p= 0.10p=0.10﻿, ou seja

X∼B(5,0.10)X∼B(5,0.10) X∼B(5,0.10)﻿

P(X=3)=f(3)=0.0081P(X= 3) =f(3) = 0.0081P(X=3)=f(3)=0.0081﻿

[![](Dashboard/Attachments/Untitled%2013%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2013.png)

2. Calcule a probabilidade de mais de 2 testes serem falsos negativos.

X=X =X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A

X∼B(5,0.10)X \sim B(5,0.10)X∼B(5,0.10)﻿

P(X>2)=1−P(X≤2)=1−F(2)=1−0.9914=0.0086P(X>2) = 1- P(X≤2) = 1- F(2) = 1 - 0.9914 = 0.0086P(X>2)=1−P(X≤2)=1−F(2)=1−0.9914=0.0086﻿

[![](Dashboard/Attachments/Untitled%2014%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2014.png)

3. Calcule, em média, quantos dos 5 testes espera que sejam falsos negativos.

X=X =X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A

X∼B(5,0.10)X \sim B(5,0.10)X∼B(5,0.10)﻿

E[X]=np=5×0.10=0.5E[X] = np = 5 \times 0.10 = 0.5E[X]=np=5×0.10=0.5﻿ testes

4. Quando os testes são feitos no laboratório B, 85% dos testes não são falsos negativos. Considere 4 testes efetuados de forma independente no laboratório B e calcule a probabilidade de 3 desses testes não serem falsos negativos.

Y=Y = Y=﻿ número de testes que **não são** falsos negativos, num grupo de quatro testes efetuados no laboratório B

Y∼B(4,0.85)Y \sim B(4, 0.85)Y∼B(4,0.85)﻿

P(Y=3)=fY(3)=0.3685P(Y=3) = f_Y(3) = 0.3685P(Y=3)=fY​(3)=0.3685﻿

[![](Dashboard/Attachments/Untitled%2015%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2015.png)

5. Se os testes forem efetuados num laboratório C, apenas 10% dos testes são falsos negativos. Considere 4 testes efetuados de uma forma independente no laboratório C. Calcule a probabilidade de, entre os 9 testes (5 do laboratório A e 4 do laboratório C), serem recebidos entre 4 e 6 testes (inclusive) falsos negativos.

X=X =X=﻿ número de testes que são falsos negativos, num grupo de cinco testes efetuados no laboratório A, X∼B(5,0.10)X \sim B(5, 0.10)X∼B(5,0.10)﻿

V=V =V=﻿ número de testes que são falsos negativos, num grupo de quatro testes efetuados no laboratório C, V∼B(4,0.10)V \sim B(4,0.10)V∼B(4,0.10)﻿

Pretende-se T=X+VT = X + VT=X+V﻿, como XXX﻿ e VVV﻿ podem ser consideradas variáves aleatórias independentes e têm a mesma probabilidade de sucesso, então pela aditividade da distribuição Binomial tem-se

T∼B(9,0.10)T \sim B(9, 0.10)T∼B(9,0.10)﻿

P(4≤T≤6)=0.0083P(4≤ T ≤ 6) = 0.0083P(4≤T≤6)=0.0083﻿

[![](Dashboard/Attachments/Untitled%2016%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2016.png)

[![](Dashboard/Attachments/Untitled%2017%203.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2017.png)﻿

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

[![](Dashboard/Attachments/Untitled%2018%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2018.png)

[![](Dashboard/Attachments/Untitled%2019%202.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2019.png)

[![](Dashboard/Attachments/Untitled%2020%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2020.png)

[![](Dashboard/Attachments/Untitled%2021%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2021.png)﻿

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

[![](Dashboard/Attachments/Untitled%2022%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2022.png)

2. Em relação ao posto de socorro A, calcule a probabilidade de que haja pelo menos 4 pedidos de ambulância.

X=X =X=﻿ número de pedidos de ambulância, por dia, reencaminhados para o posto de socorro AAA﻿

X∼P(2)X \sim P(2)X∼P(2)﻿

P(X≥4)=1−P(X<4)=1−P(X≤3)=1−F(3)=1−0.8571=0.1429P(X≥4) = 1 - P(X<4) = 1 - P(X≤3) = 1 - F(3) = 1 - 0.8571 = 0.1429P(X≥4)=1−P(X<4)=1−P(X≤3)=1−F(3)=1−0.8571=0.1429﻿

[![](Dashboard/Attachments/Untitled%2023%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2023.png)

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

[![](Dashboard/Attachments/Untitled%2024%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2024.png)

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

[![](Dashboard/Attachments/Untitled%2025%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2025.png)

6. Em relação à Central, calcule a probabilidade de que, num dia, haja no mínimo 7 pedidos de ambulância na Central.

X=X=X=﻿ número de pedidos de ambulância, num dia, reencaminhados para o posto de socorro AAA﻿, X∼P(2)X \sim P(2)X∼P(2)﻿

S=S=S=﻿ número de pedidos de ambulância, num dia, reencaminhados para o posto de socorro BBB﻿, S∼P(3)S \sim P(3) S∼P(3)﻿pois E[S]=λ=3E[S] = \lambda = 3E[S]=λ=3﻿

T=X+S=T= X+S =T=X+S=﻿ número de pedidos de ambulância, num dia na Central

como XXX﻿ e SSS﻿ podem ser consideradas variáveis aleatórias independentes, então pela **aditividade da distribuição de Poisson** tem-se

T∼P(5)T \sim P(5)T∼P(5)﻿

pois λT=λX+λ>S=2+3=5\lambda_T = \lambda_X + \lambda>S = 2 + 3 = 5λT​=λX​+λ>S=2+3=5﻿

P(T≥7)=1−P(T<7)=1−P(T≤6)=1−FT(6)=1−0.7622=0.2378P(T≥7)=1-P(T<7)=1-P(T≤6)=1-F_T(6)=1-0.7622=0.2378P(T≥7)=1−P(T<7)=1−P(T≤6)=1−FT​(6)=1−0.7622=0.2378﻿

[![](Dashboard/Attachments/Untitled%2026%201.png)](4%20Distribui%C3%A7%C3%B5es%20Te%C3%B3ricas%20Discretas/Untitled%2026.png)﻿

## Teorema

A distribuição Binomial, B(n,p)B(n,p)B(n,p)﻿, converge para a distribuição de Poisson, P(λ)P(\lambda)P(λ)﻿, quando n→+∞n → +\inftyn→+∞﻿ (o número de provas é muito grande), p→0p → 0p→0﻿ (a probabilidade de sucesso é muito pequena) e o produto (np)(np)(np)﻿ mantém-se aproximadamente constante, np=λ>0np= \lambda > 0np=λ>0﻿ (o número médio de sucessos mantém-se aproximadamente constante ao longo das provas).

X∼B(n,p)→n→+∞ep→0X∼P(np=λ)X \sim B(n,p) →_{n→+\infty e p→ 0} X \sim P(np_{=\lambda})X∼B(n,p)→n→+∞ep→0​X∼P(np=λ​)﻿

### Observação

Na prática a distribuição de Poisson é uma boa aproximação da distribuição Binomial se n≥30n ≥ 30n≥30﻿ e np≤5np ≤5np≤5﻿ (ou nq≤5nq ≤5nq≤5﻿).

---

![](Dashboard/Attachments/icons_questions%2020.png)

The **Sentence Method** is a simplified way to record notes on the fly. You should revisit your note after it is complete to restructure the information for easier reviewing later.