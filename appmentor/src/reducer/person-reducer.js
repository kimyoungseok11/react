export default function personReducer(person, action) {
  switch (action.type) {
    case "update": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          } else {
            return mentor;
          }
        }),
      };
    }
    case "added": {
      const { name, title } = action;

      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      const { name } = action;

      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    case "default": {
      throw Error(`알 수 없는 action type ; ${action.type}`);
    }
  }
}
