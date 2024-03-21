import { Student } from './entities/student.entity';
import { StudentsService } from './students.service';
import { Controller, Get } from '@nestjs/common';
@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }
}
