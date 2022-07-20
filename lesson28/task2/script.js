// ? input: object , array
// ? output: object

//! 1.check if favorites array values include object.id value
//! 2.make a copy of tree object
//! 3.add new property to copied object (isFavorite)
//! 4.map all nodes to add property for child nodes

const favorites = ['id-7', 'id-77'];

const tree = {
  id: 'id-1',
  name: 'Chandler',
  nodes: [
    {
      id: 'id-7',
      name: 'Janice',
      nodes: [
        {
          id: 'id-77',
          name: 'Gunther',
          nodes: [],
        },
      ],
    },
  ],
};

const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

console.log(markFavorites(tree, favorites));
