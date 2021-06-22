-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2021 a las 04:05:27
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "GMT-5";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `labdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `matricula` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `matricula`, `nombre`, `apellidos`, `created_at`, `updated_at`) VALUES
(1, '18090430', 'LISSETTE ANDREA', 'CASTILLO CHINO', '2021-05-25 00:18:58', '2021-05-24 19:18:58'),
(2, '18090693', 'DAVILA HERNANDEZ', 'VICTOR MANUEL', '2021-05-25 00:45:54', '2021-05-24 19:45:54'),
(3, '18090589', 'DELGADO ALONSO', ' JOSE ANTONIO', '2021-05-25 00:45:54', '2021-05-24 19:45:54'),
(4, '18090591', 'GARCIA GONZALEZ', ' JOSUE AARON', '2021-05-25 00:45:54', '2021-05-24 19:45:54'),
(5, '18090595', 'GOMEZ MARTINEZ', 'BLANCA JAZMIN', '2021-05-27 06:41:47', '2021-05-27 01:41:47'),
(6, '18090602', 'GONZALEZ ARIAS', 'NICOLAS', '2021-05-27 06:43:40', '2021-05-27 01:43:40'),
(7, '16090301', 'DANIEL', 'RAMIREZ HINOJOSA', '2021-05-29 07:38:36', '2021-05-29 02:38:36'),
(8, '18090653', 'NATALI GUADALUPE', 'HERNANDEZ MARTINEZ', '2021-05-29 07:41:19', '2021-05-29 02:41:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `id` int(11) NOT NULL,
  `alumnoId` int(11) NOT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `detalle_programaId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asistencia`
--

INSERT INTO `asistencia` (`id`, `alumnoId`, `observaciones`, `detalle_programaId`, `created_at`, `updated_at`) VALUES
(7, 2, 'pitido en regulador', 6, '2021-06-08 05:42:13', '2021-06-08 00:42:13'),
(8, 7, NULL, 6, '2021-05-29 07:42:06', '2021-05-29 02:42:06'),
(9, 5, NULL, 6, '2021-05-29 07:45:18', '2021-05-29 02:45:18'),
(10, 1, NULL, 6, '2021-05-29 07:46:10', '2021-05-29 02:46:10'),
(11, 7, NULL, 14, '2021-05-29 07:46:43', '2021-05-29 02:46:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `alias` varchar(100) NOT NULL,
  `urlImg` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carreras`
--

INSERT INTO `carreras` (`id`, `nombre`, `alias`, `urlImg`, `created_at`, `updated_at`) VALUES
(1, 'Licenciatura en biología ', 'LB', 'https://carrerasuniversitarias.com.ar/wp-content/uploads/2020/09/unnamed-17.jpg', '2021-03-31 23:40:12', '2021-03-31 17:40:12'),
(2, 'Ingenieria Civil', 'IC', 'https://www.ingenieria.unam.mx/programas_academicos/images/carreras/civil_02.jpg', '2021-04-01 00:00:37', '2021-03-31 18:00:37'),
(3, 'Ingeniería en Sistemas Coputacionales ', 'ISC', 'https://cdn.wallpapersafari.com/59/44/J8lb0L.jpg', '2021-05-07 07:51:05', '2021-05-07 02:51:05'),
(4, 'Licenciatura en administración', 'LA', 'https://www.uaem.mx/admision-y-oferta/nivel-superior/images/banner-licenciatura-administracion-publica.png', '2021-05-07 07:52:31', '2021-05-07 02:52:31'),
(5, 'Ingeniería en mecatrónica ', 'IM', 'http://blogs.upn.edu.pe/ingenieria/wp-content/uploads/sites/4/2019/06/upn_blog_ing_ingenier%C3%ADa-mecatr%C3%B3nica_07-jun.jpg', '2021-05-07 07:53:34', '2021-05-07 02:53:34'),
(6, 'Ingeniería industrial ', 'II', 'https://uvg.edu.mx/blog/wp-content/uploads/2016/07/UVG_6-materias-de-ingenieria-industrial-que-debes-conocer.jpg', '2021-05-07 07:54:41', '2021-05-07 02:54:41'),
(7, 'Gastronomia', 'G', 'https://www.excelenciasgourmet.com/sites/default/files/styles/slideshow_large/public/2018-04/gastronomia%20.jpg?itok=3vWGXVsO', '2021-05-07 07:56:23', '2021-05-07 02:56:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo`
--

CREATE TABLE `ciclo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciclo`
--

INSERT INTO `ciclo` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Marzo-Agosto-2021', '2021-04-06 02:16:18', '2021-04-05 21:16:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_programa`
--

CREATE TABLE `detalle_programa` (
  `id` int(11) NOT NULL,
  `practica_no` int(11) NOT NULL,
  `practica_nombre` varchar(200) NOT NULL,
  `fechas` text NOT NULL,
  `objetivo` text NOT NULL,
  `laboratorioId` int(11) NOT NULL,
  `programaId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle_programa`
--

INSERT INTO `detalle_programa` (`id`, `practica_no`, `practica_nombre`, `fechas`, `objetivo`, `laboratorioId`, `programaId`, `created_at`, `updated_at`) VALUES
(4, 1, 'Práctica 1 Desarrollo de un caso de modelado de negocios.', '03-Marzo-2021,\n10-Marzo-2021,\n7-Marzo-2020', 'El alumno aprenderá el concepto y características del modelado, así como el lenguaje unificado de modelado y su uso para modelar negocios', 1, 14, '2021-05-19 02:48:53', '2021-05-19 02:48:53'),
(5, 2, 'Practica 2 Análisis y Elección de la Metodología de Desarrollo Óptima', '24-Marzo-2021,\r\n07-Abril-2021,\r\n14-Abril-2021,\r\n21-Abril-2021', 'El alumno determinara cual es la metodología de desarrollo de software indicada para la realización de proyectos, podrá elegir dicha metodología considerando tiempo de vida, entregables y las ventajas que aporta está según el tipo de proyecto que se realice', 1, 14, '2021-05-04 00:52:10', '2021-05-03 19:52:10'),
(6, 3, 'Práctica 3 Metodologías de Desarrollo en el Mundo Real.', '28-Abril-2021,\r\n12-Mayo-2021,\r\n19-Mayo-2021,\r\n26-Mayo-202', 'El alumno analizará cuales son las metodologías de desarrollo utilizadas en empresas exitosas, tanto a nivel regional, nacional e internacional.', 1, 14, '2021-05-04 01:01:32', '2021-05-03 20:01:32'),
(13, 4, 'Example', 'abc', 'dfg', 2, 33, '2021-05-19 00:03:05', '2021-05-19 00:03:05'),
(14, 1, 'Enrutadores', '18-Mayo-2020', 'Un objetivo', 2, 34, '2021-05-19 07:51:16', '2021-05-19 02:51:16'),
(15, 2, 'Servidores', '20-Mayo-2020', 'Un nuevo objetivo', 2, 34, '2021-05-19 07:51:40', '2021-05-19 02:51:40'),
(26, 1, 'Costos pasivos', '03-Marzo-2021', 'Generar reporte de pasivos con plataformas', 2, 36, '2021-06-08 10:23:19', '2021-06-08 05:23:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edificio`
--

CREATE TABLE `edificio` (
  `edificioId` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `urlImg` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `edificio`
--

INSERT INTO `edificio` (`edificioId`, `nombre`, `created_at`, `updated_at`, `urlImg`) VALUES
(1, 'A', '2021-05-31 07:10:02', '2021-05-31 02:10:02', 'https://www.berdinodiaz.com/wp-content/uploads/2019/08/cropped-la-esperanza-de-un-nuevo-mundo-agora-taipei-1-640x453.jpg'),
(2, 'B', '2021-05-31 07:10:23', '2021-05-31 02:10:23', 'https://abby0591.files.wordpress.com/2012/01/cde46730de8a43642c79ca55557f9cfd.jpg'),
(3, 'C', '2021-05-31 07:11:07', '2021-05-31 02:11:07', 'https://fintonic-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/10/02161423/Webp.net-resizeimage-2019-10-02T161353.985-1200x675.jpg'),
(4, 'D', '2021-05-31 07:11:35', '2021-05-31 02:11:35', 'https://www.bbva.com/wp-content/uploads/2017/08/Torre_BBVAFrances_026-e1504111262244-948x1024.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laboratorio`
--

CREATE TABLE `laboratorio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `edificioId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `laboratorio`
--

INSERT INTO `laboratorio` (`id`, `nombre`, `edificioId`, `created_at`, `updated_at`) VALUES
(1, 'LAB A', 1, '2021-03-31 22:32:04', '2021-03-31 16:32:04'),
(2, 'LAB B', 1, '2021-03-31 22:32:04', '2021-03-31 16:32:04'),
(3, 'LAB C', 2, '2021-05-31 07:20:01', '2021-05-31 02:20:01'),
(4, 'LAB D', 2, '2021-05-31 07:20:27', '2021-05-31 02:20:27'),
(5, 'ESPECIALIDADES A1', 3, '2021-05-31 07:21:19', '2021-05-31 02:21:19'),
(6, 'ESPECIALIDADES B1', 3, '2021-05-31 07:21:46', '2021-05-31 02:21:46'),
(7, 'TORNO A1', 4, '2021-05-31 07:22:50', '2021-05-31 02:22:50'),
(8, 'TORNO A2', 4, '2021-05-31 07:22:43', '2021-05-31 02:22:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `usrId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `nombre`, `apellidos`, `usrId`, `created_at`, `updated_at`) VALUES
(12, 'Jose', 'Ramirez Hinojosa', 1, '2021-05-10 23:52:13', '2021-05-10 18:52:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programa`
--

CREATE TABLE `programa` (
  `id` int(11) NOT NULL,
  `carreraId` int(11) NOT NULL,
  `materia` varchar(200) NOT NULL,
  `cicloId` int(11) NOT NULL,
  `semestreId` int(11) NOT NULL,
  `turnoId` int(11) NOT NULL,
  `profesorId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `horario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `programa`
--

INSERT INTO `programa` (`id`, `carreraId`, `materia`, `cicloId`, `semestreId`, `turnoId`, `profesorId`, `created_at`, `updated_at`, `horario`) VALUES
(14, 1, 'Matematicas', 1, 4, 1, 12, '2021-05-15 02:26:38', '2021-05-15 02:26:38', 'L-14-16'),
(15, 7, 'Estructuras', 1, 4, 2, 12, '2021-05-19 02:52:48', '2021-05-19 02:52:48', 'L-10-132'),
(33, 4, 'Matemáticas', 1, 3, 2, 12, '2021-05-15 01:07:28', '2021-05-15 01:07:28', 'L-10-13'),
(34, 3, 'Telecomunicaciones', 1, 3, 2, 12, '2021-05-19 07:50:20', '2021-05-19 02:50:20', 'L-14-16'),
(36, 4, 'Capital', 1, 3, 1, 12, '2021-06-08 10:17:31', '2021-06-08 05:17:31', 'M-12-13 V-10-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', '2021-04-01 21:19:55', '2021-04-01 15:19:55'),
(2, 'Profesor', '2021-04-01 21:20:24', '2021-04-01 15:20:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `semestre`
--

CREATE TABLE `semestre` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `semestre`
--

INSERT INTO `semestre` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, '1°', '2021-04-06 00:48:12', '2021-04-05 19:48:12'),
(2, '2°', '2021-04-06 00:48:12', '2021-04-05 19:48:12'),
(3, '3°', '2021-04-20 03:40:13', '2021-04-19 22:40:13'),
(4, '4°', '2021-04-20 03:40:13', '2021-04-19 22:40:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno`
--

CREATE TABLE `turno` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turno`
--

INSERT INTO `turno` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Matutino', '2021-04-06 01:16:01', '2021-04-05 20:16:01'),
(2, 'Vespertino', '2021-04-06 01:16:01', '2021-04-05 20:16:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usr` varchar(200) NOT NULL,
  `psw` varchar(200) NOT NULL,
  `rolId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usr`, `psw`, `rolId`, `created_at`, `updated_at`) VALUES
(1, 'profesor', 'profesor', 2, '2021-04-01 21:20:45', '2021-04-01 15:20:45'),
(4, 'adm', 'adm', 1, '2021-06-08 06:03:08', '2021-06-08 01:03:08'),
(16, 'destructive', 'destructive', 2, '2021-05-30 02:29:15', '2021-05-29 21:29:15'),
(22, '21321321', '1321321332', 1, '2021-05-30 00:54:36', '2021-05-29 19:54:36'),
(23, '21321321', '1321321332', 1, '2021-05-30 00:54:36', '2021-05-29 19:54:36'),
(24, '21321321', '1321321332', 1, '2021-05-30 00:54:36', '2021-05-29 19:54:36'),
(25, '21321321', '1321321332', 1, '2021-05-30 00:54:36', '2021-05-29 19:54:36'),
(26, '21321321', '1321321332', 1, '2021-05-30 00:54:37', '2021-05-29 19:54:37'),
(27, '21321321', '1321321332', 1, '2021-05-30 00:54:37', '2021-05-29 19:54:37'),
(28, '21321321', '1321321332', 1, '2021-05-30 00:54:37', '2021-05-29 19:54:37'),
(29, '21321321', '1321321332', 1, '2021-05-30 00:54:37', '2021-05-29 19:54:37'),
(30, '21321321', '1321321332', 1, '2021-05-30 00:54:37', '2021-05-29 19:54:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumnoId` (`alumnoId`),
  ADD KEY `detalle_programaId` (`detalle_programaId`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ciclo`
--
ALTER TABLE `ciclo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_programa`
--
ALTER TABLE `detalle_programa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `laboratorioId` (`laboratorioId`),
  ADD KEY `programaId` (`programaId`);

--
-- Indices de la tabla `edificio`
--
ALTER TABLE `edificio`
  ADD PRIMARY KEY (`edificioId`);

--
-- Indices de la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `edificioId` (`edificioId`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usrId` (`usrId`);

--
-- Indices de la tabla `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carreraId` (`carreraId`),
  ADD KEY `cicloId` (`cicloId`),
  ADD KEY `semestreId` (`semestreId`),
  ADD KEY `turnoId` (`turnoId`),
  ADD KEY `profesorId` (`profesorId`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `semestre`
--
ALTER TABLE `semestre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `turno`
--
ALTER TABLE `turno`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rolId` (`rolId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `ciclo`
--
ALTER TABLE `ciclo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `detalle_programa`
--
ALTER TABLE `detalle_programa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `edificio`
--
ALTER TABLE `edificio`
  MODIFY `edificioId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `programa`
--
ALTER TABLE `programa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `semestre`
--
ALTER TABLE `semestre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `turno`
--
ALTER TABLE `turno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`alumnoId`) REFERENCES `alumnos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `asistencia_ibfk_2` FOREIGN KEY (`detalle_programaId`) REFERENCES `detalle_programa` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `detalle_programa`
--
ALTER TABLE `detalle_programa`
  ADD CONSTRAINT `detalle_programa_ibfk_1` FOREIGN KEY (`laboratorioId`) REFERENCES `laboratorio` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `detalle_programa_ibfk_2` FOREIGN KEY (`programaId`) REFERENCES `programa` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  ADD CONSTRAINT `laboratorio_ibfk_1` FOREIGN KEY (`edificioId`) REFERENCES `edificio` (`edificioId`);

--
-- Filtros para la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD CONSTRAINT `profesores_ibfk_1` FOREIGN KEY (`usrId`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `programa`
--
ALTER TABLE `programa`
  ADD CONSTRAINT `programa_ibfk_1` FOREIGN KEY (`carreraId`) REFERENCES `carreras` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `programa_ibfk_2` FOREIGN KEY (`cicloId`) REFERENCES `ciclo` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `programa_ibfk_3` FOREIGN KEY (`semestreId`) REFERENCES `semestre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `programa_ibfk_4` FOREIGN KEY (`turnoId`) REFERENCES `turno` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `programa_ibfk_5` FOREIGN KEY (`profesorId`) REFERENCES `profesores` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
