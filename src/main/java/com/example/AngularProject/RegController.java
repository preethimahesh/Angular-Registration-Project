package com.example.AngularProject;
import java.util.List;
import com.example.AngularProject.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Registration")
public class RegController
{
@Autowired
private RegServiceInterface registerService;

@RequestMapping(method=RequestMethod.GET)
public List<Registration> getAllReg()
{
    return registerService.getAll();
}

	@RequestMapping(method = RequestMethod.POST)
	public Registration save(@RequestBody Registration item) {
		return registerService.save(item);

	}

@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Registration find(@PathVariable Long id) {
		return registerService.find(id);
	}
    

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		registerService.delete(id);

	}
     @RequestMapping(value = "/{id}", method = RequestMethod.POST)
	public Registration updateItem(@RequestBody Registration reg, @PathVariable Long id) {
		reg.setId(id);
		return registerService.update(reg,id);
	}
}