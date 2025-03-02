using Microsoft.AspNetCore.Mvc;

namespace water_energy_game.Controllers
{
    public class ElectricitySavingGameController : Controller
    {
        public IActionResult ElectricityIndex()
        {
            return View();
        }
    }
}
