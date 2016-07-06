/**Funcion de Recorrido en preorder
/argumento tree = nodo
/argumento action = accion a realizar
/argumento args = padre
**/
const eachBlockPre = (tree, action, args) =>{
    action(tree,args);
    tree.functions.forEach((functions) => eachBlockPre(functions, action, args);
};

module.exports = semantic;
