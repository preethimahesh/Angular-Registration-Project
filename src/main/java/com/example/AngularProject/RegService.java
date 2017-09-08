package com.example.AngularProject;
import java.util.List;

import com.example.AngularProject.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("registerService")
public class RegService implements RegServiceInterface {

	@Autowired
	private RegRepository regRepository;

	@Override
	public List<Registration> getAll() {
		// TODO Auto-generated method stub
		return regRepository.findAll();
	}

	@Override
	public Registration save(Registration reg) {
		// TODO Auto-generated method stub
		return regRepository.saveAndFlush(reg);

	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		regRepository.delete(id);
	}

	@Override
	public Registration find(Long id) {
		// TODO Auto-generated method stub
		return regRepository.findOne(id);
	}
@Override
	public Registration update(Registration reg,Long id) {
		// TODO Auto-generated method stub
		reg.setId(id);
		return regRepository.saveAndFlush(reg);
	}
}
