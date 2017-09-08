package com.example.AngularProject;
import com.example.AngularProject.*;
import java.util.*;
public interface RegServiceInterface {

	public List<Registration> getAll();

	public Registration save(Registration reg);

	public Registration find(Long id);

	public void delete(Long id);

    public Registration update(Registration reg,Long id);

}
