using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Entityframework.Models;
using Entityframework;

namespace Entityframework
{
    public class repository
    {
        flixContext context;

        public repository()
        {
            context = new flixContext();
        }

        public List<Users> get() {

            var c = (from e in context.Users
                     select e).ToList();

            return c;
        }


        public string login(string email, string password) 
        {
            string msg;

            try
            {
                var c = (from e in context.Users
                         where e.Email == email
                         && e.Password == password
                         select e.Email).FirstOrDefault();
                if (c != null)
                {
                    msg = c;
                }
                else
                {
                    msg = "unauthorized";
                }
            }
            catch (Exception)
            {

                msg = "server down";
            }

            return msg;
        
        }


        public string newUser(string name, string email, string password)
        {
            string msg;

            try
            {
                Users us = new Users();
                us.Name = name;
                us.Email = email;
                us.Password = password;

                if (us != null)
                {
                    context.Users.Add(us);
                    context.SaveChanges();
                    msg = "user added successfully";
                }
                else
                {
                    msg = "please fill the details properly";
                }

            }
            catch (Exception)
            {

                msg = "server down";
            }

            return msg;

        }


        public string info(string name)
        {
            string msg;

            try
            {
                var c = (from e in context.Info
                         where e.Name == name
                         select e.Info1).FirstOrDefault();

                if (c != null)
                {
                    
                    msg = c;
                }
                else
                {
                    msg = "result not found";
                }

            }
            catch (Exception)
            {

                msg = "server down";
            }

            return msg;

        }


        public string movie(string name)
        {
            string msg;

            try
            {
                var c = (from e in context.Movie
                         where e.Name == name
                         select e.Link).FirstOrDefault();

                if (c != null)
                {

                    msg = c;
                }
                else
                {
                    msg = "result not found";
                }

            }
            catch (Exception)
            {

                msg = "server down";
            }

            return msg;

        }


        public string trailer(string name)
        {
            string msg;

            try
            {
                var c = (from e in context.Trailer
                         where e.Name == name
                         select e.Link).FirstOrDefault();

                if (c != null)
                {

                    msg = c;
                }
                else
                {
                    msg = "result not found";
                }

            }
            catch (Exception)
            {

                msg = "server down";
            }

            return msg;

        }


        public string addwlis(string name, string email)
        {
            string msg;

            try
            {
                Watchlist us = new Watchlist();
                var c = (from e in context.Users
                         where e.Email == email
                         select e.Email).FirstOrDefault();

                if (c != null)
                {
                    us.Name = name;
                    us.Email = email;
                    context.Watchlist.Add(us);
                    context.SaveChanges();
                    msg = "added to watchlist";
                }
                else
                {
                    msg = "result not found";
                }

            }
            catch (Exception ex)
            {

                msg = ex.Message;
            }

            return msg;

        }


        public List<string> getwlis(string email)
        {
            List<string> msg;

            try
            {
                var c = (from e in context.Watchlist
                         where e.Email == email
                         select e.Name).ToList();

                if (c != null)
                {

                    msg = c;
                }
                else
                {
                    msg = null;
                }

            }
            catch (Exception ex)
            {

                throw null;
            }

            return msg;

        }


    }

    

}
