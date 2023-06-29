function getDependencies(tree) {
    var dependencies = [];

    function traverse(tree) {
        if (tree && tree.dependencies) {
            Object.keys(tree.dependencies).forEach(function (dep) {
                let dependency = dep + '@' + tree.dependencies[dep].version;
                if (!dependencies.includes(dependency)) {
                    dependencies.push(dependency);
                }
                traverse(tree.dependencies[dep]);
            });
        }
    }

    traverse(tree);

    return dependencies.sort();
}

module.exports = getDependencies;

/*
 TODO: this is the official solution
*/
// function getDependencies(mod, result) {
//     result = result || []
//     var dependencies = mod && mod.dependencies || []
//     Object.keys(dependencies).forEach(function (dep) {
//         var key = dep + '@' + mod.dependencies[dep].version
//         if (result.indexOf(key) === -1) result.push(key)
//         getDependencies(mod.dependencies[dep], result)
//     })
//     return result.sort()
// }
// module.exports = getDependencies
