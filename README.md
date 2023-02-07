# MEDCIPHER

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Sobre o projeto](#2-sobre-o-projeto)
* [3. Interface com o usuário](#3-interface-com-o-usuário)
* [4. Interface implantada](#4-interface-implantada)
* [5. Objetivos alcançados](#5-objetivos-alcançados)


***

## 1. Prefácio

Esse é o meu primeiro projeto de desenvolvimento web, criado para o bootcamp da Laboratória. 

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo, a palavra "CRIPTOGRAFAR" com o deslocamento de 10 posições será "MBSZDYQBKPKB".

Neste projeto desenvolvido usando HTML, CSS e JavaScript, o usuário poderá cifrar e decifrar um texto no navegador indicando um deslocamento específico de caracteres. 

## 2. Sobre o projeto

O **SUS** (sistema único de saúde), não se restringe apenas a hospitais e pronto-socorros. Há também postos de saúde onde os usuários que passam por consulta com um clínico geral e necessitam de atendimento especializado (por exemplo, um portador de diabetes mellitus do tipo 2, que necessita passar com um endocrinologista), são encaminhados para o ambulatório.

Esse paciente passa por consulta e seus dados e prontuários de atendimentos e exames ficam disponíveis aos outros especialistas médicos e não médicos do ambulatório (nutricionistas, enfermeiros, psicológos e afins). Esses prontuários só podiam ser vistos pelos especialistas e ainda sim, se fosse necessário, mas agora está disponível aos usuários também.

Atualmente, em alguns momentos, esses profissionais, necessitam escrever algumas orientações aos outros profissionais, mas que fora de um contexto, poderia gerar desconfortos, problemas e ou processos.

**Por exemplo:**

A gestante de alto-risco que passa por consulta com a psicologia e relata estar vivendo um relacionamento abusivo. Seu parceiro teria acesso a esse conteúdo facilmente. Ou ainda um paciente de idade avançada, com problemas cardíacos, ansiedade e que o médico está investigando um possível câncer ou diagnóstico igualmente ruim.

Em alguns momentos, faz-se necessário, palavras ou frases que o profissional coloque no prontuário, mas que só outros profissionais envolvidos no caso, saibam a respeito. O **MedCipher** pode ser a ferramenta para essas orientações internas aos profissionais, sem haver problemas ou expor nenhum paciente.

## 3. Interface com o usuário

A primeira página permitirá que o usuário faça login para maior segurança e controle das informações. Todo o projeto foi pensado e realizado de forma com que a interação fosse clara, intuitiva e discreta.


![login-medcipher](https://user-images.githubusercontent.com/122536567/217250293-4f87d0e7-9433-4bc9-8e32-bb8978cb2a67.png)


O profissional digitará na primeira caixa a mensagem que deseja transformar em código e em seguida escolherá o número de deslocamento para decidir qual letra tomará o lugar da original.

Ao clicar no botão criptografar ou descriptografar, aparecerá o resultado na segunda caixa. 


![criptografia](https://user-images.githubusercontent.com/122536567/217109899-83efc16e-45a2-444c-8802-26d40d18175d.png)

Então, terá a opção de adicionar ao prontuário ou sair, e será redirecionado a página inicial de login.

## 4. Interface implantada





## 5. Objetivos alcançados

* [✔] Possui uma interface que possibilita criptografar e
  descriptografar.
* [✔] Permite ao usuário escolher o número de deslocamento.
* [✔] Aceitação de letras maiúsculas e minusculas.
* [✔] Os caracteres especiais são mantidos.
* [✔] Testes unitários dos métodos `cipher`
  (`encode` e `decode`).

