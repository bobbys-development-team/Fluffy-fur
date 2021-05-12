module.exports = {
    name: "support",
    description: "Send support server invite link",
    execute(message) {
      return message.member
        .send(
          `https://discord.gg/yHKQnGCNz7`
        )
        .catch(console.error);
    }
  };
  