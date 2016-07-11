/**Funcion de Recorrido en preorder
/argumento tree = nodo
/argumento action = accion a realizar
/argumento args = padre
**/

(function(exports) {
  "use strict";

const eachBlockPre = (tree, action, args) =>{
    action(tree,args);
    tree.functions.forEach((functions) => eachBlockPre(functions, action, args));
};

function semantic(tree) {

  eachBlockPre(tree,(nodo, args) => {
    nodo.symbolTable = {
      name : nodo.name.value,
      contants: nodo.contants,
      variables : nodo.variables,
      functions : nodo.functions,
      params : nodo.params
    };
  },null);

  eachBlockPre(tree,(nodo, args) => {
    nodo.functions.forEach( (functions) => {
      functions.symbolTable.father = nodo.name.value,
      functions.symbolTable.fathertable = nodo.symbolTable
    });
  },null);

}

exports.semantic = semantic;
})(this);
