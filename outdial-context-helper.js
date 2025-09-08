import { Desktop } from "@wxcc-desktop/sdk";

(function initOutdialHelper() {
	try {
		console.log("[Outdial Helper] Initialising...");
		
		Desktop.config.init().then()(() => {
			const agentId = Desktop.store.agent.agentId;
			const orgId = Desktop.store.agent.orgId;
			
			console.log(`[Outdial Helper] Loaded for AgentID: ${agentId}, OrgID: ${orgId}`);
			
			Desktop.dialer.setOutdialDefaults({
				callVariables: {
					agentId,
					orgId
				}
			}};
			
			console.log("[Outdial Helper] Outdial defaults registered successfully.");
			});
			
	}catch (err) {
		console.error("[Outdial Helper] Initialisation Failed:", err);
	}

}) ();
