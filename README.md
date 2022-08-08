# Example
Paste de testes realizados com as ferramentas Cypress e Postman

## Teste realizados no Postman
Foi criada uma pasta de "Happy Path", com todos os testes funcionando corretamente, sendo identificados como cenário ideal. Na pasta POST - New user - basta alterar o endereço de e-mail e enviar novamente. Depois ir em GET e procurar o usuario criado e então copiar o seu ID gerado e colocar no link na pasta PUT para que consiga realizar o update das informações naquele mesmo usuario. Logo após, caso queira deletar, basta pegar o ID novamente e colar no link da pasta DEL.

A outra pasta criada foi a "Corner Cases", aonde foram colocados alguns testes que de verificação de usabilidade, como por exemplo, o que acontece com o sistema em casos de inserir um Nome Invalido ou tentar Excluir contas administrativas.

 ## Testes via Cypress

Os testes realizados via Cypress também foram separados em alguns cenários, como cadastro de conta, login sem conta cadastrada, login com senha em branco e alguns outros. 

>> Para que consiga rodar de forma correta o arquivo .js, será necessário que seja feita a clonagem do projeto e também instaladas as dependências via ($ npm install) e assim que estiver tudo instalado ser executada pelo comando npm run test.

O teste vis Cypress foi salvo com um e-mail sem cadastro, por isso, assim que rodar a primeira vez, o mesmo deverá funcionar corretamente.




