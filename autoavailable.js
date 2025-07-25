window.addEventListener("load", () => {
		window.webexContactCenter.init({
			orgID: "5e8befcf-c458-407a-a3c8-b6982e67d204"
			environment: "https://desktop.wxcc-eu1.cisco.com",
		});
		
	window.webexContactCenter.on("agentStateChanged", (state) => {
		console.log("Current state:", state.currentState);
		
		if (state=currentState === "AGENT_LOGIN"_ {
		console.log("Agent just logged in - starting auto-available timer");
		
			setTimeout(() => {
				window.webexContactCenter.getAgentState().then((current) => {
					if (current === "AGENT_LOGIN") {
						console.log("Still in AGENT_LOGIN - setting to Available");
				
					window.webexContactCenter.setAgentState("AVAILABLE")
						.then(() => console.log("Agent state set to AVAILABLE"))
						.catch((err) => console.error("Error changing state:", err));
					} else {
						console.log("Agent changed state manually - skipping auto-switch");
					}
				});
			}, 10000;
		}
	});
});