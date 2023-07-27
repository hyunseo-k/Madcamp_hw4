# MadCampWeek4 : KAImind(catchmind)
making catchmind with websocket, react<br/>

## 🧑‍🤝‍🧑Our Team
<br/>

|Teammates|University|github|
|------|---|---|
|Hyunseo Kang|SKKU|[hyunseo-k](http://github.com/hyunseo-k)|
|Dongwoo Jang|HYU|[jjangddu](http://github.com/jjangddu)|

## 📚STACKS
<div align=left> 
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> 
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
<br/>

## 🖼️Screenshots
<br/>

<br/>
Login page

<br/>

Login Success

<br/>
<br/>
<br/>

Singup Page
<br/>
<br/>
<br/>

Profile Page
<br/>
<br/>


<br/>
![gamepage](https://github.com/hyunseo-k/Madcamp_hw4/assets/55375379/c226706c-2b09-4718-813c-b1155c78b4cc)

Game Page
<br/>


## 📖Info

We used django channels to make websocket backend. <br/>
In game page, we have chatting and drawing componenets. We used 'usewebsocket' library for chatting, and 'w3cwebsocket' library for drawing componenets. It was easy to make chatting page synchronize with websocket backend, but drawing page was hard to synchronize. So we find new method to show our server's canvas in game page, simply bringing canvas page into our react page.
<br/>

## ✈️How to play

'''
docker run --rm -p 6379:6379 redis:7
python3 manage.py runserver 0.0.0.0:80
'''
run this in server<br/>

'''
npm start
'''
run this in react app<br/>


