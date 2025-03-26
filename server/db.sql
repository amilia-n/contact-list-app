-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contacts (
    contact_id serial PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(100),
    notes VARCHAR(255),
    birthday DATE
);

--
-- Name: starsign; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.starsign (
    id serial PRIMARY KEY,
    start_date DATE,
    end_date DATE,
    star_sign VARCHAR(255)
);

--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.contacts (name, email, phone, notes, birthday)
VALUES 
    ('Allegra', 'treatsforme@email.com', '5141321577', 'do not call in the afternoon','2017-06-01'),
    ('Toby', 'fishallday@meow.net', '1237745452', 'loves catgrass, great present','2015-05-12'),
    ('Cassie','tortienumber1@me.com', '9544571154','very pink toebeans','2016-01-01'),
    ('Target', 'browntabby2@email.com', '1281154211', 'just happy to be included','2014-06-27');

--
-- Data for Name: starsign; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.starsign (start_date, end_date, star_sign)
VALUES 
    ('2000-03-21', '2000-04-19', 'aries'),
		('2000-04-20', '2025-05-20', 'taurus'),
		('2000-05-21', '2025-06-21', 'gemini'),
		('2000-06-22', '2025-07-22', 'cancer'),
		('2000-07-23', '2025-08-22', 'leo'),
		('2000-08-23', '2025-09-22', 'virgo'),
		('2000-09-23', '2025-10-23', 'libra'),
		('2000-10-24', '2025-11-21', 'scropius'),
		('2000-11-22', '2025-12-21', 'sagittarius'),
		('2000-12-22', '2025-01-19', 'capricornus'),
		('2000-01-20', '2025-02-18', 'aquarius'),
		('2000-02-19', '2025-03-20', 'pisces');
    
--
-- PostgreSQL database dump complete
--




