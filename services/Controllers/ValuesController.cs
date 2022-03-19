using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entityframework.Models;
using Entityframework;
using Microsoft.AspNetCore.Cors;

namespace services.Controllers
{
    [EnableCors("allow")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : Controller
    {
        repository repo;

        public ValuesController()
        {
            repo = new repository();
        }

        [HttpGet]
        public JsonResult get()
        {

            var result = repo.get();

            return Json(result);
        }

        [HttpPost]
        public JsonResult login(Users userObj)
        {
            string result;
            try
            {
                result = repo.login(userObj.Email, userObj.Password);
            }
            catch (Exception ex)
            {

                result = ex.Message;
            }
            

            return Json(result);
        }


        [HttpPost]
        public JsonResult newUser(Users userObj)
        {
            string result;
            try
            {
                result = repo.newUser(userObj.Name, userObj.Email, userObj.Password);
            }
            catch (Exception ex)
            {

                result = ex.Message;
            }
            
            return Json(result);
        }


        [HttpPost]
        public JsonResult info(Info userObj)
        {

            string result;
            try
            {
                result = repo.info(userObj.Name);
            }
            catch (Exception ex)
            {

                result = ex.Message;
            }
               

            return Json(result);
        }


        [HttpPost]
        public JsonResult movie(Movie userObj)
        {

            string result;
            try
            {
                result = repo.movie(userObj.Name);
            }
            catch (Exception ex)
            {

                result = ex.Message;
            }


            return Json(result);
        }


        [HttpPost]
        public JsonResult trailer(Trailer userObj)
        {

            string result;
            try
            {
                result = repo.trailer(userObj.Name);
            }
            catch (Exception ex)
            {

                result = ex.Message;
            }


            return Json(result);
        }


        [HttpPost]
        public JsonResult addwlis(Watchlist userObj)
        {

            string result;
            try
            {
                result = repo.addwlis(userObj.Name, userObj.Email);
            }
            catch (Exception ex)
            {

                result = ex.Message;
            }


            return Json(result);
        }


        [HttpPost]
        public JsonResult getwlis(Watchlist userObj)
        {

            List<string> result;
            try
            {
                result = repo.getwlis(userObj.Email);
            }
            catch (Exception ex)
            {

                result = null;
            }


            return Json(result);
        }

    }
}
