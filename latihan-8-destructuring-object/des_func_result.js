const getUser = () => {
  return {
    name: "I Nyoman Triarta",
    handle: "@triarta",
    location: "Bali, Indonesia",
  };
};

// Extraction
const { name, handle, location } = getUser();
console.log(name, handle, location);
