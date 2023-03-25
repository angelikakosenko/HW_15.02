const data = [
    {
      _id: Date.now(),
      name: 'Алексей',
      gender: "man",
      imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
    },
    {
      _id: Date.now(),
      name: 'Алексей',
      gender: "man",
      imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
    },
    {
      _id: Date.now(),
      name: 'Алексей',
      gender: "man",
      imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
    },
    {
      _id: Date.now(),
      name: 'Алексей',
      gender: "man",
      imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
    },
    {
      _id: Date.now(),
      name: 'Светлана',
      gender: "woman",
      imageLink: 'https://www.golem.de/2209/168549-346531-346530_rc.jpg'
    },
    {
      _id: Date.now(),
      name: 'Светлана',
      gender: "woman",
      imageLink: 'https://www.golem.de/2209/168549-346531-346530_rc.jpg'
    }
  ]




export const userReducer = (state = data, action) => {
    if (action.type === 'ADD') {
        
        return [...state, action.payload]
    } else {
        return state
    }
}