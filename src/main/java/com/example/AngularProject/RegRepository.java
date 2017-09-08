package com.example.AngularProject;
import com.example.AngularProject.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository("regRepository")
public interface RegRepository extends JpaRepository< Registration ,Long > {

}
