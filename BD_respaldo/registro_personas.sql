PGDMP     -    ;            
    |            registro_personas    12.19    12.19 0    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    187987    registro_personas    DATABASE     �   CREATE DATABASE registro_personas WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Mexico.1252' LC_CTYPE = 'Spanish_Mexico.1252';
 !   DROP DATABASE registro_personas;
                postgres    false                        2615    18527    tiger    SCHEMA        CREATE SCHEMA tiger;
    DROP SCHEMA tiger;
                postgres    false                        2615    18808 
   tiger_data    SCHEMA        CREATE SCHEMA tiger_data;
    DROP SCHEMA tiger_data;
                postgres    false                        2615    18234    topology    SCHEMA        CREATE SCHEMA topology;
    DROP SCHEMA topology;
                postgres    false            �           0    0    SCHEMA topology    COMMENT     9   COMMENT ON SCHEMA topology IS 'PostGIS Topology schema';
                   postgres    false    18                        3079    18378    address_standardizer 	   EXTENSION     H   CREATE EXTENSION IF NOT EXISTS address_standardizer WITH SCHEMA public;
 %   DROP EXTENSION address_standardizer;
                   false            �           0    0    EXTENSION address_standardizer    COMMENT     �   COMMENT ON EXTENSION address_standardizer IS 'Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.';
                        false    7                        3079    18516    fuzzystrmatch 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;
    DROP EXTENSION fuzzystrmatch;
                   false            �           0    0    EXTENSION fuzzystrmatch    COMMENT     ]   COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';
                        false    2                        3079    18512    ogr_fdw 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS ogr_fdw WITH SCHEMA public;
    DROP EXTENSION ogr_fdw;
                   false            �           0    0    EXTENSION ogr_fdw    COMMENT     L   COMMENT ON EXTENSION ogr_fdw IS 'foreign-data wrapper for GIS data access';
                        false    3            
            3079    16394    postgis 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;
    DROP EXTENSION postgis;
                   false            �           0    0    EXTENSION postgis    COMMENT     g   COMMENT ON EXTENSION postgis IS 'PostGIS geometry, geography, and raster spatial types and functions';
                        false    10                        3079    17990 	   pgrouting 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS pgrouting WITH SCHEMA public;
    DROP EXTENSION pgrouting;
                   false    10            �           0    0    EXTENSION pgrouting    COMMENT     9   COMMENT ON EXTENSION pgrouting IS 'pgRouting Extension';
                        false    8                        3079    18405 
   pointcloud 	   EXTENSION     >   CREATE EXTENSION IF NOT EXISTS pointcloud WITH SCHEMA public;
    DROP EXTENSION pointcloud;
                   false            �           0    0    EXTENSION pointcloud    COMMENT     G   COMMENT ON EXTENSION pointcloud IS 'data type for lidar point clouds';
                        false    5                        3079    18501    pointcloud_postgis 	   EXTENSION     F   CREATE EXTENSION IF NOT EXISTS pointcloud_postgis WITH SCHEMA public;
 #   DROP EXTENSION pointcloud_postgis;
                   false    5    10            �           0    0    EXTENSION pointcloud_postgis    COMMENT     n   COMMENT ON EXTENSION pointcloud_postgis IS 'integration for pointcloud LIDAR data and PostGIS geometry data';
                        false    4            	            3079    17396    postgis_raster 	   EXTENSION     B   CREATE EXTENSION IF NOT EXISTS postgis_raster WITH SCHEMA public;
    DROP EXTENSION postgis_raster;
                   false    10            �           0    0    EXTENSION postgis_raster    COMMENT     M   COMMENT ON EXTENSION postgis_raster IS 'PostGIS raster types and functions';
                        false    9                        3079    18385    postgis_sfcgal 	   EXTENSION     B   CREATE EXTENSION IF NOT EXISTS postgis_sfcgal WITH SCHEMA public;
    DROP EXTENSION postgis_sfcgal;
                   false    10            �           0    0    EXTENSION postgis_sfcgal    COMMENT     C   COMMENT ON EXTENSION postgis_sfcgal IS 'PostGIS SFCGAL functions';
                        false    6                        3079    18528    postgis_tiger_geocoder 	   EXTENSION     I   CREATE EXTENSION IF NOT EXISTS postgis_tiger_geocoder WITH SCHEMA tiger;
 '   DROP EXTENSION postgis_tiger_geocoder;
                   false    2    17    10            �           0    0     EXTENSION postgis_tiger_geocoder    COMMENT     ^   COMMENT ON EXTENSION postgis_tiger_geocoder IS 'PostGIS tiger geocoder and reverse geocoder';
                        false    12                        3079    18235    postgis_topology 	   EXTENSION     F   CREATE EXTENSION IF NOT EXISTS postgis_topology WITH SCHEMA topology;
 !   DROP EXTENSION postgis_topology;
                   false    18    10            �           0    0    EXTENSION postgis_topology    COMMENT     Y   COMMENT ON EXTENSION postgis_topology IS 'PostGIS topology spatial types and functions';
                        false    11            "           1259    196179    fotografias    TABLE       CREATE TABLE public.fotografias (
    id integer NOT NULL,
    fotografia character varying(250) NOT NULL,
    descripcion character varying(250),
    imagen character varying(200),
    numero integer NOT NULL,
    autor character varying(200) NOT NULL,
    activo boolean NOT NULL,
    usuario_creacion character varying(100) NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.fotografias;
       public         heap    postgres    false            $           1259    196216    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    first_name character varying(70),
    last_name character varying(70),
    email character varying(70),
    usuario character varying(100) NOT NULL,
    password character varying(50) NOT NULL,
    usuario_creacion character varying(100),
    id_rol integer NOT NULL,
    activo boolean NOT NULL,
    avatar character varying(100),
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            #           1259    196214    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    292            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    291            *           2604    196219    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    292    291    292            �          0    196179    fotografias 
   TABLE DATA           �   COPY public.fotografias (id, fotografia, descripcion, imagen, numero, autor, activo, usuario_creacion, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    290   .                 0    18407    pointcloud_formats 
   TABLE DATA           @   COPY public.pointcloud_formats (pcid, srid, schema) FROM stdin;
    public          postgres    false    238   #.                 0    16699    spatial_ref_sys 
   TABLE DATA           X   COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
    public          postgres    false    217   @.       �          0    196216    usuarios 
   TABLE DATA           �   COPY public.usuarios (id, first_name, last_name, email, usuario, password, usuario_creacion, id_rol, activo, avatar, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    292   ].                 0    18534    geocode_settings 
   TABLE DATA           T   COPY tiger.geocode_settings (name, setting, unit, category, short_desc) FROM stdin;
    tiger          postgres    false    241   �.                 0    18900    pagc_gaz 
   TABLE DATA           K   COPY tiger.pagc_gaz (id, seq, word, stdword, token, is_custom) FROM stdin;
    tiger          postgres    false    285   /                 0    18912    pagc_lex 
   TABLE DATA           K   COPY tiger.pagc_lex (id, seq, word, stdword, token, is_custom) FROM stdin;
    tiger          postgres    false    287   //                 0    18924 
   pagc_rules 
   TABLE DATA           8   COPY tiger.pagc_rules (id, rule, is_custom) FROM stdin;
    tiger          postgres    false    289   L/                 0    18238    topology 
   TABLE DATA           G   COPY topology.topology (id, name, srid, "precision", hasz) FROM stdin;
    topology          postgres    false    232   i/                 0    18251    layer 
   TABLE DATA           �   COPY topology.layer (topology_id, layer_id, schema_name, table_name, feature_column, feature_type, level, child_id) FROM stdin;
    topology          postgres    false    233   �/       �           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 4, true);
          public          postgres    false    291            @           2606    196186    fotografias fotofrafias_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.fotografias
    ADD CONSTRAINT fotofrafias_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.fotografias DROP CONSTRAINT fotofrafias_pkey;
       public            postgres    false    290            B           2606    196224    usuarios usuario_id_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuario_id_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuario_id_pkey;
       public            postgres    false    292            �      x������ � �            x������ � �            x������ � �      �   �   x�}�=
!@�z��Jf4} � iw0B��M�6������
8n�
Ԓ�����%�理�d��{��ɨk@���o�h�3��N�h�ܤ�i~&����f�\4���}9+��#i�]�����\H            x������ � �            x������ � �            x������ � �            x������ � �            x������ � �            x������ � �     