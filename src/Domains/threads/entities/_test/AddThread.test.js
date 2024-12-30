const AddThread = require("../AddThread");

describe("a AddThread entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      title: "abc",
    };

    // Action and Assert
    expect(() => new AddThread(payload)).toThrowError(
      "ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      title: 123,
      body: true,
      owner: "user-123",
    };

    // Action and Assert
    expect(() => new AddThread(payload)).toThrowError(
      "ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should throw error when title contains more than 50 character", () => {
    // Arrange
    const payload = {
      title: "dicodingindonesiadicodingindonesiadicodingindonesiadicoding",
      body: "Dicoding Indonesia",
      owner: "user-123",
    };

    // Action and Assert
    expect(() => new AddThread(payload)).toThrowError(
      "ADD_THREAD.TITLE_LIMIT_CHAR"
    );
  });

  it("should create AddThread object correctly", () => {
    // Arrange
    const payload = {
      title: "dicoding",
      body: "Dicoding Indonesia",
      owner: "user-123",
    };
    // Action
    const addThread = new AddThread(payload);

    // Assert
    expect(addThread).toEqual({ ...payload });
  });
});
