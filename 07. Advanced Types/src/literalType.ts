type Action = "submit" | "stop" | "pause" | "reset";

const handleAction = (action: Action) => {
  console.log(`Action: ${action}`);
}
handleAction("submit");
handleAction("stop");