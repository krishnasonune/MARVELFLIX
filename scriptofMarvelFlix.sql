USE [master]
GO
/****** Object:  Database [flix]    Script Date: 2/24/2023 1:18:06 PM ******/
CREATE DATABASE [flix]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'flix', FILENAME = N'C:\Users\Krishna\flix.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'flix_log', FILENAME = N'C:\Users\Krishna\flix_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [flix] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [flix].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [flix] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [flix] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [flix] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [flix] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [flix] SET ARITHABORT OFF 
GO
ALTER DATABASE [flix] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [flix] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [flix] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [flix] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [flix] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [flix] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [flix] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [flix] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [flix] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [flix] SET  ENABLE_BROKER 
GO
ALTER DATABASE [flix] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [flix] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [flix] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [flix] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [flix] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [flix] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [flix] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [flix] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [flix] SET  MULTI_USER 
GO
ALTER DATABASE [flix] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [flix] SET DB_CHAINING OFF 
GO
ALTER DATABASE [flix] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [flix] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [flix] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [flix] SET QUERY_STORE = OFF
GO
USE [flix]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [flix]
GO
/****** Object:  Table [dbo].[info]    Script Date: 2/24/2023 1:18:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[info](
	[userId] [int] IDENTITY(100,1) NOT NULL,
	[name] [varchar](30) NOT NULL,
	[info] [varchar](2000) NOT NULL,
 CONSTRAINT [pk_id] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[movie]    Script Date: 2/24/2023 1:18:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[movie](
	[Id] [int] IDENTITY(100,1) NOT NULL,
	[name] [varchar](30) NOT NULL,
	[link] [varchar](1000) NOT NULL,
 CONSTRAINT [po_id] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[trailer]    Script Date: 2/24/2023 1:18:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[trailer](
	[Id] [int] IDENTITY(100,1) NOT NULL,
	[name] [varchar](30) NOT NULL,
	[link] [varchar](1000) NOT NULL,
 CONSTRAINT [ps_id] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2/24/2023 1:18:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[userId] [int] IDENTITY(100,1) NOT NULL,
	[name] [varchar](30) NOT NULL,
	[email] [varchar](60) NOT NULL,
	[password] [varchar](30) NOT NULL,
 CONSTRAINT [pc_id] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[watchlist]    Script Date: 2/24/2023 1:18:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[watchlist](
	[Id] [int] IDENTITY(100,1) NOT NULL,
	[email] [varchar](30) NOT NULL,
	[name] [varchar](1000) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[info] ON 

INSERT [dbo].[info] ([userId], [name], [info]) VALUES (100, N'iron man', N'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.')
INSERT [dbo].[info] ([userId], [name], [info]) VALUES (101, N'spiderman', N'With Spider-Man identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.')
INSERT [dbo].[info] ([userId], [name], [info]) VALUES (102, N'shangchi', N'Martial-arts master Shang-Chi confronts the past he thought he left behind when he drawn into the web of the mysterious Ten Rings organization.')
INSERT [dbo].[info] ([userId], [name], [info]) VALUES (103, N'whatif', N'Reimagining noteworthy events in the Marvel Cinematic Universe and creating a multiverse of infinite possibilities.')
INSERT [dbo].[info] ([userId], [name], [info]) VALUES (104, N'loki', N'Loki, the God of Mischief, steps out of his brothers shadow to embark on an adventure that takes place after the events of "Avengers: Endgame.')
INSERT [dbo].[info] ([userId], [name], [info]) VALUES (105, N'hawkeye', N'Clint Barton and Kate Bishop shoot a few arrows and try to avoid becoming the target themselves')
SET IDENTITY_INSERT [dbo].[info] OFF
GO
SET IDENTITY_INSERT [dbo].[movie] ON 

INSERT [dbo].[movie] ([Id], [name], [link]) VALUES (100, N'iron man', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/IronMan.2008.720p.Hindi.English.MoviesFlixPro.in.mkv?alt=media&token=21c99dfa-9251-4273-ae08-fb8af4266475')
INSERT [dbo].[movie] ([Id], [name], [link]) VALUES (101, N'spiderman', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/Spider.Man.No.Way.Home.2021.V3.720P.Hdcam.Hindi.Dub.1Xbet1.mkv?alt=media&token=60a8c36b-de56-4114-ac66-7f3470a72235')
INSERT [dbo].[movie] ([Id], [name], [link]) VALUES (102, N'shangchi', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/ShangChi.2021.720p.Hindi.English.Bluray.Esubs.MoviesVerse.Co.mkv?alt=media&token=65103754-444e-417a-8945-8efe6a6cff3f')
SET IDENTITY_INSERT [dbo].[movie] OFF
GO
SET IDENTITY_INSERT [dbo].[trailer] ON 

INSERT [dbo].[trailer] ([Id], [name], [link]) VALUES (100, N'iron man', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/y2mate.com%20-%20Iron%20Man%202008%20Trailer%201%20%20Movieclips%20Classic%20Trailers_1080p.mp4?alt=media&token=e18a889b-a4aa-49a7-8cb2-cc297bd5d9fe')
INSERT [dbo].[trailer] ([Id], [name], [link]) VALUES (101, N'spiderman', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/y2mate.com%20-%20SPIDERMAN%20NO%20WAY%20HOME%20%20Official%20Trailer%20HD_1080p.mp4?alt=media&token=8ae1519d-cde9-4f87-8c90-56df6acfc698')
INSERT [dbo].[trailer] ([Id], [name], [link]) VALUES (102, N'shangchi', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/y2mate.com%20-%20Marvel%20Studios%20ShangChi%20and%20the%20Legend%20of%20the%20Ten%20Rings%20%20Official%20Trailer_1080p.mp4?alt=media&token=12a7e9c6-4b75-4425-b0bc-6d7c28d04bb6')
INSERT [dbo].[trailer] ([Id], [name], [link]) VALUES (103, N'whatif', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/y2mate.com%20-%20Marvel%20Studios%20What%20If%20%20Official%20Trailer%20%20Disney_1080p.mp4?alt=media&token=2c30f6e7-a774-4243-b091-5fac6bf09d46')
INSERT [dbo].[trailer] ([Id], [name], [link]) VALUES (104, N'loki', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/y2mate.com%20-%20Marvel%20Studios%20Loki%20%20Official%20Trailer%20%20Disney_1080p.mp4?alt=media&token=b2dcfeb3-1a2a-4e8c-8c21-3424a237eee0')
INSERT [dbo].[trailer] ([Id], [name], [link]) VALUES (105, N'hawkeye', N'https://firebasestorage.googleapis.com/v0/b/hope-a93be.appspot.com/o/y2mate.com%20-%20Marvel%20Studios%20Hawkeye%20%20Official%20Trailer%20%20Disney_1080p.mp4?alt=media&token=d7889f64-bfc0-43ca-a43b-f4303b2dc158')
SET IDENTITY_INSERT [dbo].[trailer] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([userId], [name], [email], [password]) VALUES (100, N'raghav', N'raghav@gmail.com', N'pallavi')
INSERT [dbo].[Users] ([userId], [name], [email], [password]) VALUES (104, N'shangchi', N'sh@gmail.com', N'ten10')
INSERT [dbo].[Users] ([userId], [name], [email], [password]) VALUES (106, N'mahadev', N'mahadev@gmail.com', N'sati123')
INSERT [dbo].[Users] ([userId], [name], [email], [password]) VALUES (107, N'ram', N'ram@gmail.com', N'ram123')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [uq_id]    Script Date: 2/24/2023 1:18:08 PM ******/
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [uq_id] UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [flix] SET  READ_WRITE 
GO
