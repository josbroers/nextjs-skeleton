import React from "react";

/**
 * Interface for the {@link Container()} component.
 */
export interface ContainerInterface {
	children: React.ReactNode
	size: "full" | "large" | "small"
}
