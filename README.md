# Semana Omnistack 10 da Rocketseat (DevRadar)

# Aprendizados

## Backend

**Métodos HTTP:** GET, POST, PUT e DELETE

**Tipos de parâmetros:**
**Query params:** request.query (Filtros, ordenação, paginação, ...)
**Route params:** request.params ( Identificar um recurso na alteração ou remoção)
**Body:** request.body ( Dados para criação ou alteração de um registro)

## Frontend

**Componente** é uma função que retorna algum conteúdo HTML / CSS / JS. 
Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
Quando fazer um componente? quando o mesmo trecho de código é repetido várias vezes no sistema
>Primeira letra sempre maiúscula;
>Um componente por arquivo;
>Deve sempre importar o react;
>Deve sempre exportar o componente.

**Estado:** informações mantidas pelo componente (lembrar: imutabilidade)
>Deve importar o useState do react;
Sempre cria a função dentro da função do componente.

**Propriedade:** informações que um componente pai passa para o componente filho.

useEffect() -> dispara uma função toda vez que uma informação alterar. Já é do próprio React
