
USE master;
GO
IF DB_ID('leadmanagement-db') IS NULL
  CREATE DATABASE [leadmanagement-db];
GO
USE [leadmanagement-db];
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Leads](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ContactFirstName] [nvarchar](max) NOT NULL,
	[ContactLastName] [nvarchar](max) NOT NULL,
	[ContactPhoneNumber] [nvarchar](max) NOT NULL,
	[ContactEmail] [nvarchar](max) NOT NULL,
	[DateCreated] [datetime2](7) NOT NULL,
	[Suburb] [nvarchar](max) NOT NULL,
	[Category] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Leads] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Leads] ON 

INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (1, N'Daniel', N'Miller', N'555-2456', N'daniel.miller@example.com', CAST(N'2024-02-10T14:23:00.0000000' AS DateTime2), N'Brooklyn, 102', N'Plumbing', N'Fixing a broken sink', CAST(320.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (2, N'Emma', N'Davis', N'555-7894', N'emma.davis@example.com', CAST(N'2023-04-26T07:53:20.0000000' AS DateTime2), N'Manhattan, 205', N'Roofing', N'Leak repair and shingle replacement', CAST(1850.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (3, N'Ryan', N'Taylor', N'555-3265', N'ryan.taylor@example.com', CAST(N'2023-03-12T10:58:43.0000000' AS DateTime2), N'Downtown, 330', N'Electrical Work', N'Installing new power outlets', CAST(420.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (4, N'Sophia', N'Harris', N'555-9987', N'sophia.harris@example.com', CAST(N'2024-02-12T07:30:00.0000000' AS DateTime2), N'Greenwich Village, 412', N'Home Cleaning', N'Deep cleaning for a 2-bedroom apartment', CAST(150.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (5, N'Isabella', N'Martinez', N'555-6654', N'isabella.martinez@example.com', CAST(N'2024-05-09T10:52:12.0000000' AS DateTime2), N'SoHo, 215', N'Pest Control', N'Rodent extermination service', CAST(580.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (6, N'Ethan', N'Wilson', N'555-7723', N'ethan.wilson@example.com', CAST(N'2024-01-22T16:40:00.0000000' AS DateTime2), N'Upper East Side, 334', N'Flooring Installation', N'Installing hardwood floors in living room', CAST(2400.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (7, N'Ethan', N'Wilson', N'555-7723', N'ethan.wilson@example.com', CAST(N'2024-11-18T03:19:15.0000000' AS DateTime2), N'Upper East Side, 334', N'Flooring Installation', N'Installing hardwood floors in living room', CAST(2400.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (8, N'Ava', N'Rodriguez', N'555-8821', N'ava.rodriguez@example.com', CAST(N'2025-02-02T10:25:00.0000000' AS DateTime2), N'Financial District, 503', N'Moving Services', N'Relocating to a new apartment', CAST(1100.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (9, N'Mason', N'Garcia', N'555-6677', N'mason.garcia@example.com', CAST(N'2024-02-06T20:15:00.0000000' AS DateTime2), N'Tribeca, 290', N'Painting', N'Painting the exterior walls', CAST(700.00 AS Decimal(18, 2)), N'Invited')
INSERT [dbo].[Leads] ([Id], [ContactFirstName], [ContactLastName], [ContactPhoneNumber], [ContactEmail], [DateCreated], [Suburb], [Category], [Description], [Price], [Status]) VALUES (10, N'Mia', N'Lopez', N'555-1144', N'mia.lopez@example.com', CAST(N'2024-01-27T12:05:00.0000000' AS DateTime2), N'Williamsburg, 650', N'Landscaping', N'Garden design and maintenance', CAST(950.00 AS Decimal(18, 2)), N'Invited')
SET IDENTITY_INSERT [dbo].[Leads] OFF
GO
