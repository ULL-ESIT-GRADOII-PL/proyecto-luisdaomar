/**Funcion de Recorrido en preorder
/argumento tree = nodo
/argumento action = accion a realizar
/argumento args = padre
**/

const eachBlockPre = (tree, action, args) =>{
    action(tree,args);
    tree.functions.forEach((functions) => eachBlockPre(functions, action, args);
};

function semantic(tree) {

  eachBlockPre(tree,(nodo, args) => {
    nodo.symbolTable = {
      name : nodo.name.value,
      contants: nodo.constants,
      variables : nodo.variables,
      functions : nodo.functions,
      params : nodo.params
    };
  },null);

}

module.exports = semantic;
