contoh pnya Arif : before : https://tranquil-mooncake-2d40ec.netlify.app/ >>> after : https://arifprofilsesi07.netlify.app/

link netlify percobaan :
namalengkap | link netlify (yg barusan dibuat)

1. Quraisyi | https://quraisyi-profile-sesi07.netlify.app/
2. Rifki Nurmansyah | https://rifki-profile-sesi-7.netlify.app/
3. Mochamad Delly Maulana Agustian | https://delly-profile-sesi7.netlify.app
4. Rahmat Rhizaldo | https://rahmatrhizaldoprofilesesi07.netlify.app/
5. Muhammad Andhika | https://dhika-profile-sesi7.netlify.app/
6. Hermawan Tri Yulianto | https://hermawanprofilesesi07.netlify.app/
7. Hilmi Faturahman Akbar | https://hilmifaprofilesesi07.netlify.app/
8. Siska Putra Tri Gumilang | https://gilangprofilsesi07.netlify.app/
9. Sukron | https://sukron-profilsesi7.netlify.app/
10. Madyan Eka Septian | https://madyanesprofilsesi7.netlify.app/
11. Nur Widya Anisa Muslim | https://widyaanisaprofilsesi7.netlify.app/
12. Rizky Cahya Ahmad | https://rizkycahyaahmadprofilsesi07.netlify.app/
13. Fikra Hifdziyal Akbar | fikrahifdziyal-profile-sesi07.netlify.app/
14. Aris Krisnanto | https://polite-duckanoo-c452eb.netlify.app/
15. Inas Lathifah | https://inaslathifah.netlify.app/
16. De' asywal Akhbari Kwitanto | https://deasywall.netlify.app/
17. Rendi Mario | https://.netlify.app/
sesi 07 pembelajaran testing
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Document</title>
    <style>
      body {
        background-color: #f1f1f1;
        padding: 20px;
        margin: 20px;
      }
      h1 {
        border: 10px solid #000;
      }
    </style>
  </head>
  <body>
    <h1>Hello Unit Testing</h1>
    <h2>Hello Unit Testing</h2>
    <script>
      var hello = "Hello Unit Testing";
      console.log(hello);
      dataHello();

      function dataHello() {
        let nama = "Arif";
        document.write(
          hello + "<br />" + nama + "<br />" + "Tambah : " + tambah(10)
        );
      }

      function tambah(params) {
        // cek tipe data
        if (typeof params != "number") {
          return "Error! Bukan Number.";
        }
        var a = 10;
        var b = params == undefined ? 1 : params;
        var hasil = a + b;
        return hasil;
      }
    </script>
  </body>
</html>


-------
tahapan :
by team / solo 
1. alur / flow
2. algoritma / batasan / sampai mana
    > disaat ada revisi/penambahan fitur (by consult)
3. sketsa / mockup / rancangan (oretan)
4. rab > sdm > dll
5. development > target > progress > 85% 
    > bad mod/hal lain > 87% (stuck / gk sesuai) > 100%
6. testing / uji kelayakan
    > diri kita / croscheck koding/dll
7. deployment / server / domain / dll
    > diri kita / croscheck koding/dll
    
netlify
-----

netlify
---
1. buat github / punya email (gmail)
2. buat akun netlify (signup by gmail / by github) (terima)
    > by github > suspend
3. buat repo / web_profile_sesi_07
    > public repo
4. push data local (web portofolio) ke repo web_profile_sesi_07
5. buat site > sinkron/hubungkan ke github
6. ganti domain (subdomain) > dgn nama teman" (arifprofilsesi07)
7. link domain netlify (website hasil deployment)


push github :
-----
git add .
git commit -m "update data"
git push
