const input = {
  name: "Anirban",
  age: 25,
  department: {
    name: "Full Stack Developer",
    section: "Technical",
    branch: { name: "Bangalore", timezone: "IST" },
  },
  company: { name: "Jhavtech Studios" },
  skills: ["javascript", "node.js", "html"],
};

let output: { [key: string]: any } = {};

const flatten = (obj: { [key: string]: any }) => {
  const entries = Object.entries(obj);

  entries.forEach((entry) => {
    traverse(entry[0], entry[1]);
  });
  console.log("==== output: ", output);
};

const traverse = (key: string, value: unknown, prefix?: string) => {
  if (typeof value === "object" && !Array.isArray(value)) {
    if (value) {
      const entries = Object.entries(value);
      entries.forEach((entry) => {
        const updatedKey = prefix ? `${prefix}_${key}` : key;
        traverse(entry[0], entry[1], updatedKey);
      });
    }
  } else {
    const updatedKey = prefix ? `${prefix}_${key}` : key;
    output = {
      ...output,
      [updatedKey]: value,
    };
  }
};

flatten(input);
