CREATE TABLE `faqs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`question` text NOT NULL,
	`answer` text NOT NULL,
	`order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `process_steps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`step` text NOT NULL,
	`title` text NOT NULL,
	`text` text NOT NULL,
	`order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`number` text NOT NULL,
	`title` text NOT NULL,
	`text` text NOT NULL,
	`tags` text NOT NULL,
	`accent` integer DEFAULT false NOT NULL,
	`order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `supply_routes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`label` text NOT NULL,
	`title` text NOT NULL,
	`text` text NOT NULL,
	`points` text NOT NULL,
	`order` integer DEFAULT 0 NOT NULL
);
